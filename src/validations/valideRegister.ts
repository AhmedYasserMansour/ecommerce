import { z } from 'zod';
const valideRegister = z.object({
    firstName: z.string().min(2, { message: "First Name is Required" }),
    lastName: z.string().min(2, { message: "Last Name is Required" }),
    email: z.string().min(2, { message: "Email is Required" }).email()
    .refine(
      (value) => /^[\w-\.]+[0-9]+@([\w-]+\.)+[\w-]{3}$/g.test(value), 
      { message: "Email must contain both letters and numbers before the @ symbol" }
  ),
    password: z.string().nonempty({ message: "Password is required" })
    .min(8, { message: "Password Must be 8 or more characters long" })
      .regex(/.*[^\w\s]|_.*/, { message: "Password must contain at least one special character" }),
    confirmPassword: z.string().min(2, { message: "Confirm Password is Required" }),
  })
    .refine((val) => val.password === val.confirmPassword, {
      message: "Password and Confirm Password does not match",
      path: ['confirmPassword'],
    });
  
  type Inputs = z.infer<typeof valideRegister>
    export {type Inputs}
    export default valideRegister;