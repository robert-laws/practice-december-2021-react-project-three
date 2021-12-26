import { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const auth = getAuth();

  const signupUser = async (displayName, email, password) => {
    setError(null);
    setIsPending(true);
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!credential) {
        throw new Error('User not created');
      } else {
        try {
          await updateProfile(auth.currentUser, { displayName: displayName });
          setError(null);
        } catch (err) {
          setError(err.message);
        }
      }
    } catch (err) {
      setError(err.message);
    }
    setIsPending(false);
  };

  return [error, isPending, signupUser];
};
