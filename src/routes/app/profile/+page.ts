// src/routes/profile/+page.ts
import type { PageLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load: PageLoad = async ({ parent }) => {
  const { supabase, session } = await parent()
  if (!session) {
    throw redirect(303, '/signin')
  }
  const { data: posts } = await supabase.from('Blogs').select('*')
  const { data: user } = await supabase
  .from('profiles')
  .select('username')
  .eq('id', session.user.id)
  .limit(1)

  const username = user[0].username

  return {
    user: session.user,
    posts,
    username
  }
}
