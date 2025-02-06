import {useState } from 'react';
import { getDatabase, ref, get } from '@/firebase';
type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed" |"errorPassword";

const UseAuth = () => {
  const [status, setStatus] = useState<TStatus>('idle');
  
  const checkName = async (email: string,name: string) => {
    const db = getDatabase();
    const usersRef = ref(db, 'users');
    setStatus('checking');
  
    try {
       const snapshot = await get(usersRef);
    if (snapshot.exists()) {
      const users = snapshot.val(); 
      // check email
      for (const userId in users) {
        if (users[userId].email === email && users[userId].name === name) {
          setStatus('available'); // password correct
            return;  
        }
      }
      }
   else {
      setStatus('notAvailable'); // no users found
    } 
        } catch (error) {
          setStatus('failed');
        }
      }
      
      return { status,setStatus , checkName };
    };


export default UseAuth;
