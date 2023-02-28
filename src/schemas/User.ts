import { z } from 'zod';

export const User = z.object({
  firstName: z.string().min(1, { message: 'First name cannot be empty' }),
  lastName: z.string().min(1, { message: 'Last Name cannot be empty' }).max(50),
  email: z.string().email({ message: 'Looks like this is not an email' }),
  password: z
    .string()
    .min(8, { message: 'Password must contain at least 8 characters' })
    .max(20, { message: 'Password must not contain more than 20 characters' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    }),
});

export type UserSchema = z.infer<typeof User>;

