import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sgtiznzeegsmwepmjput.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndGl6bnplZWdzbXdlcG1qcHV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTMzNDYsImV4cCI6MjA2NTU2OTM0Nn0.NCSGovHoBheaMdQ8lIpJ-i-LMLWa62D7mA5NdLnIpaM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 