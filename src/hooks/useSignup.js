import { useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { loginUser } = useAuthContext();

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

          // dispatch login action
          loginUser(credential.user);

          if (!isCancelled) {
            setError(null);
            setIsPending(false);
          }
        } catch (err) {
          if (!isCancelled) {
            setError(err.message);
            setIsPending(false);
          }
        }
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  });

  return [signupUser, error, isPending];
};
