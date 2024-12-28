import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_SUPABASE_API!;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);