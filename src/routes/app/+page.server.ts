import { superValidate } from 'sveltekit-superforms/server';

export const load = async () => {
  // Server API:
  const form = await superValidate(EditPro);

  // Always return { form } in load and form actions.
  return { form };
};
