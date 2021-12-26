import { createContext, useReducer } from 'react';

const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  const loginUser = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logoutUser = () => {
    dispatch({ type: 'LOGOUT' });
  };

  console.log('AuthProvider state: ', state);

  return (
    <AuthContext.Provider value={{ user: state.user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
