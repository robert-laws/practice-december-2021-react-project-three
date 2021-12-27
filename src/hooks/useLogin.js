import { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { loginUser } = useAuthContext();

  const auth = getAuth();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      loginUser(credential.user);

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setIsPending(false);
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return [login, error, isPending];
};
