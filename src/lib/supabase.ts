/**
 * Supabase client initialization.
 * Add @supabase/supabase-js and configure VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY.
 * Use Edge Functions for LLM and server-only logic; never expose API keys in the client.
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

// When Supabase is configured:
// import { createClient } from '@supabase/supabase-js'
// export const supabase = createClient(supabaseUrl, supabaseAnonKey)
