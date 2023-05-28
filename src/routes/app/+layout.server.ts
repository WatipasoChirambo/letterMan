// src/routes/+layout.server.ts
import type { LayoutServerLoad } from '../app/$types'

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
  return {
    session: await getSession(),
  }
}