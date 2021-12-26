import AuthContext from '../context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return authContext;
};
