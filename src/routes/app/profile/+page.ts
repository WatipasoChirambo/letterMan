// src/routes/profile/+page.ts
import type { PageLoad } from './$types'
import { redirect } from '@sveltejs/kit'
import { supabase } from '../../../supabase/supabase'

export const load: PageLoad = async ({ parent }) => {
  const { supabase, session } = await parent()
  if (!session) {
    throw redirect(303, '/')
  }
  const { data: posts } = await supabase.from('Blogs').select('*')

  return {
    user: session.user,
    posts,
  }
}
