import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bdidgpvulgprtzfqlzqv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkaWRncHZ1bGdwcnR6ZnFsenF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1OTM2NDIsImV4cCI6MjAwNzE2OTY0Mn0.ah3OauUM2ASgBLfG7EUvqIkVudVAd7jeStY018FXT5Q";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
