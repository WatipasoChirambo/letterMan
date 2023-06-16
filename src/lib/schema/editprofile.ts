import { z } from 'zod';

// Name has a default value just to display something in the form.
export const EditProfileSchema = z.object({
  username: z.string(),
  fullname: z.string()
});