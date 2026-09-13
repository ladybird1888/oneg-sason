const { neon } = require("@neondatabase/serverless");
const fs = require("fs");
const path = require("path");

function loadEnvLocal() {
  const envPath = path.join(process.cwd(), ".env.local");
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    const value = trimmed.slice(eq + 1);
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is missing from .env.local");
  process.exit(1);
}

const sql = neon(databaseUrl);

const statements = [
  `CREATE TABLE IF NOT EXISTS volunteer_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    country TEXT,
    areas_of_interest TEXT[],
    availability TEXT,
    introduction TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS partnership_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    organization_name TEXT NOT NULL,
    organization_type TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    job_title TEXT,
    email TEXT NOT NULL,
    area_of_interest TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    source TEXT NOT NULL DEFAULT 'newsletter',
    created_at TIMESTAMPTZ DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS donations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tx_ref TEXT UNIQUE,
    amount DECIMAL(10,2) NOT NULL,
    donation_type TEXT NOT NULL,
    currency TEXT NOT NULL DEFAULT 'NGN',
    email TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
  )`,
];

(async () => {
  for (const statement of statements) {
    const label = statement.match(/CREATE TABLE IF NOT EXISTS (\w+)/)?.[1];
    console.log(`Creating ${label}...`);
    await sql.query(statement);
  }
  const rows = await sql`SELECT COUNT(*)::int AS count FROM users`;
  console.log("Schema applied. users count:", rows[0].count);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
