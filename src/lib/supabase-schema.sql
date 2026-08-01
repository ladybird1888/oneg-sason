-- Run this in your Supabase SQL editor (https://supabase.com/dashboard/project/_/sql/new)

CREATE TABLE IF NOT EXISTS volunteer_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT,
  areas_of_interest TEXT[],
  availability TEXT,
  introduction TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS partnership_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_name TEXT NOT NULL,
  organization_type TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  job_title TEXT,
  email TEXT NOT NULL,
  area_of_interest TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tx_ref TEXT UNIQUE,
  amount DECIMAL(10,2) NOT NULL,
  donation_type TEXT NOT NULL,
  currency TEXT NOT NULL DEFAULT 'NGN',
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- If the donations table already exists (ran schema before this line was added):
ALTER TABLE donations ADD COLUMN IF NOT EXISTS tx_ref TEXT UNIQUE;
