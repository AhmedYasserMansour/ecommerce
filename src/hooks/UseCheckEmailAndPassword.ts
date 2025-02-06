import { useState } from 'react';
import { getDatabase, ref, get } from '@/firebase';

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed" | "errorPassword";

const UseCheckEmailAndPassword = () => {
  const [status, setStatus] = useState<TStatus>('idle');

  const checkPassword = async (email: string, password: string) => {
    const db = getDatabase();
    const usersRef = ref(db, 'users');
    setStatus('checking');

    try {
      if (!navigator.onLine) {
        throw new Error('No internet connection');
      }

      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        const users = snapshot.val(); 

        let emailFound = false; // Flag to check if the email is found
        let passwordCorrect = false; // Flag to check if the password is correct

        // Loop through all users
        for (const userId in users) {
          const user = users[userId];

          // Check if the email matches
          if (user.email === email) {
           const data = { userId,...users[userId] }
            emailFound = true;

            // Check if the password matches
            if (user.password === password) {
              passwordCorrect = true;
              setStatus('available'); 
              // Password is correct
              break;  // We found the user and password, exit the loop
            } else {
              setStatus('errorPassword'); // Password is incorrect
              break;  // Exit the loop as we don't need to check further
            }
          }
        }

        // After the loop, check if we found the email
        if (!emailFound) {
          setStatus('notAvailable'); // Email not found
        } else if (!passwordCorrect) {
          setStatus('errorPassword'); // Password is incorrect
        }
      } else {
        setStatus('notAvailable'); // No users found in the database
      }
    } catch (error) {
      setStatus('failed'); // Something went wrong with the request
    }
  };

  return { status, setStatus, checkPassword };
};

export default UseCheckEmailAndPassword;
