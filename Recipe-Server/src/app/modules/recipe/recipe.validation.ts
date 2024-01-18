import { z } from 'zod';

const createZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is Required!' }),
   
  }),
});
const updateZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
 
  }),
});

export const PostValidation = {
  createZodSchema,
  updateZodSchema,
};
