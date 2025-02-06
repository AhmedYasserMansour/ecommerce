

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import valideRegister, { Inputs } from '@/validations/valideRegister';
import { auth, createUserWithEmailAndPassword, sendEmailVerification,
   getDatabase, ref, set } from '@/firebase';
import UseCheckEmail from '@/hooks/UseCheckEmail';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
const UseRegister = () => {
    const { register, handleSubmit, formState: { errors }, getFieldState, trigger, reset } = useForm<Inputs>({
        mode: "onBlur",
        resolver: zodResolver(valideRegister),
      }); 
    
      const { status, enteredEmail , checkEmail,resetCheckEmail, setStatus } = UseCheckEmail();
      const navigate = useNavigate();
    
      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setStatus('loading');
        const { email, password, firstName, lastName } = data;
        if(status === 'idle') {
            checkEmail(email);
        }
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          await sendEmailVerification(user);
          const db = getDatabase();
          const userRef = ref(db, 'users/' + user.uid);
          await set(userRef, {
            email: email,
            password: password,
            name: `${firstName} ${lastName}`
          });
          setStatus('idle');
          reset();
          navigate('/login?message=created_account');
         } catch (error) { 
          console.error("Error registering user:", error);
        }
      };
      const isDisabled = useMemo(() => {
        return status === 'checking' || status === 'loading' || status === 'notAvailable';
      }, [status]);
    
      const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (enteredEmail !== value) {
        await trigger('email');
        const { isDirty, invalid } = getFieldState('email');
        checkEmail(value);
        
        if (isDirty && !invalid && enteredEmail !== value) {
          // checking
          checkEmail(value);
        }
        if (isDirty && invalid && enteredEmail) {
          resetCheckEmail();
        }
        }
      };
  return {handleSubmit,onSubmit, emailOnBlurHandler, errors, register, isDisabled, status} 
}

export default UseRegister;
