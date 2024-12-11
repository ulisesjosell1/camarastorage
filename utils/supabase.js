import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://https://supabase.com/dashboard/project/sspzfbffhhaddyhwrktw/storage/buckets/appcam';
const supabaseKey = 'YOUR_SUPABASE_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);
