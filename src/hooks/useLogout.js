import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { logoutUser } = useAuthContext();

  const auth = getAuth();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signOut(auth);
      logoutUser();

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
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return [logout, error, isPending];
};
