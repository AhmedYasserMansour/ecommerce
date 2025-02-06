import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import valideLogin, { signInType } from '@/validations/valideLogin';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UseCheckEmailAndPassword from '@/hooks/UseCheckEmailAndPassword';
import { useEffect } from 'react';
import AuthLogin from '@/store/auth/act/AuthLogin';
import { useAppDispatch} from '@/store/hooks';
import { resetUI } from '@/store/auth/act/AuthSlice';


const UseLogin = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<signInType>({
        mode: "onBlur",
        resolver: zodResolver(valideLogin),
      });
      const navigate = useNavigate();
      const { status , checkPassword, setStatus} = UseCheckEmailAndPassword();
      const [searchParams, setSearchParams]= useSearchParams();
       const dispatch = useAppDispatch();
       const onSubmit: SubmitHandler<signInType> = async (data) => {
          dispatch(AuthLogin(data));
    
         if(searchParams.get('message')) {
           setSearchParams('')
          }
          setStatus('idle');
          const { email, password } = data;
          await checkPassword(email, password);
        };
        useEffect(() => {
          if (status === 'available') {  
          navigate('/');
        }
      }, [status, navigate]);
      const handleChange = async (e: React.FocusEvent<HTMLInputElement>)=> {
        const value = e.target.value;
        if (value === '') {
          setStatus('idle')
        } 
      }
      useEffect(() => {
       return ()=>{
         dispatch(resetUI());
      } 
      }, [dispatch]);
  return {searchParams, handleSubmit,onSubmit, register,errors,handleChange, status}
}

export default UseLogin;
