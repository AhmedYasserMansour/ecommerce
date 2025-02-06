import { useState } from 'react';
import { getDatabase, ref, get } from '@/firebase'; 
type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed" | 'loading';
const UseCheckEmail = () => {
  const [status, setStatus] = useState<TStatus>('idle');
  const [enteredEmail, setEnteredEmail]= useState<null | string>(null);
  
  const checkEmail =  async (email: string) => {
    setStatus('checking');
    setEnteredEmail(email);
    const db = getDatabase();
    const usersRef = ref(db, 'users');
    try {
       const snapshot = await get(usersRef);
    if (snapshot.exists()) {
      const users = snapshot.val();  // array of data
      // check email
      for (const userId in users) {
        if (users[userId].email === email) {
          setStatus('notAvailable');
          return true;  // email found
        }
      }
      setStatus('available'); 
      return false;  // No email found
    } else {
      setStatus('available'); 
      return false;  //No data
    }
        } catch (error) {
          setStatus('failed'); 
        }

      }
     const resetCheckEmail = () => {
        setStatus('idle');
        setEnteredEmail(null);
      }
      return { status,setStatus , enteredEmail, checkEmail, resetCheckEmail, setEnteredEmail };
    };


export default UseCheckEmail;





