import { createClient } from "@supabase/supabase-js"


const apiUrl='https://bvucjugnfmiwylvzjbfg.supabase.co'
const apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2dWNqdWduZm1pd3lsdnpqYmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNDk3NjEsImV4cCI6MjAyMjYyNTc2MX0.0mT_woheBI69jpBoO_kXeFiCytD21EVL6TJeqec91dg'

export const supabase=createClient(apiUrl, apiKey)