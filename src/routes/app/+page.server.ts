import { EditProfileSchema } from '$lib/schema/editprofile';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async () => {
  // Server API:
  const form = await superValidate(EditProfileSchema);

  return { form };
};
