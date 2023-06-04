// src/routes/profile/+page.ts
import type { PageLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load: PageLoad = async ({ parent }) => {
  const { supabase, session } = await parent()
  
  if (!session) {
    throw redirect(303, '/signin')
  }
  const { data: posts } = await supabase
  .from('Blogs')
  .select(`*,
  category(
    category
  )
  )`)
  .order('created_at', { ascending: false })
  
  return {
    user: session.user,
    posts
  }
}