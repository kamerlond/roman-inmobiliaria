import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://dbncbyupmvsypsxzidom.supabase.co'
const SUPABASE_KEY = 'sb-publishable-XB06JzGdZIkS9mJ1ljeP7gSTcPgRBU'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
