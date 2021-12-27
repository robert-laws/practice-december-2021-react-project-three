import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });
  const [login, error, isPending] = useLogin();

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(loginDetails.email, loginDetails.password);
  };

  return (
    <main className='layout-960'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          <span>email:</span>
          <input
            id='email'
            type='email'
            name='email'
            value={loginDetails.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            id='password'
            type='password'
            name='password'
            value={loginDetails.password}
            onChange={handleChange}
          />
        </label>
        {!isPending && <button className='btn'>Login</button>}
        {isPending && (
          <button className='btn' disabled>
            Loading...
          </button>
        )}
        {error && <p className='error'>{error}</p>}
      </form>
    </main>
  );
};
