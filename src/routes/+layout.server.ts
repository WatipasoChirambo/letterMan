// src/routes/+layout.server.ts
import { supabase } from '../supabase/supabase'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
  let ses = await getSession()

  const { data, error } = await supabase
  .from('profiles')
  .select('username')
  .eq('id', ses?.user.id)
  .limit(1)

  return {
    session: await getSession(),
  }
}
