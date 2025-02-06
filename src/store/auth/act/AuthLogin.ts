import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get } from "firebase/database";
type TLogin = {
  email: string;
  password: string;
};

const AuthLogin = createAsyncThunk('auth/AuthLogin', async (formData: TLogin, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const db = getDatabase();
    const usersRef = ref(db, 'users/'); 
    const snapshot = await get(usersRef);
    
    if (snapshot.exists()) {
      const users = snapshot.val();  
      for (const userId in users) {
        if (users[userId].email === formData.email && 
            users[userId].password === formData.password ) { 
        const userData = { userId, ...users[userId] };
        return userData;
        }
      }
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return rejectWithValue(error); 
  }
});

export default AuthLogin;
