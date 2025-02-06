import { z } from 'zod';
const valideLogin = z.object({
    email: z.string().nonempty({ message: "Email is Required" }).email()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g),
    password: z.string().nonempty({ message: "Password is required" })
  })
  
  type signInType = z.infer<typeof valideLogin>
    export {type signInType}
    export default valideLogin;