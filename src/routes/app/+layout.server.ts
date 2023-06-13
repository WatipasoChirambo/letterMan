// src/routes/+layout.server.ts
import { supabase } from '../../supabase/supabase'
import type { LayoutServerLoad } from '../app/$types'

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {

  return {
    session: await getSession(),
  }
}