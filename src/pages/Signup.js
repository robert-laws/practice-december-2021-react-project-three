import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

export const Signup = () => {
  const [signup, setSignup] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  const [signupUser, error, isPending] = useSignup();

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signupUser(signup.displayName, signup.email, signup.password);
  };

  return (
    <main className='layout-960'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          <span>display name:</span>
          <input
            id='displayName'
            type='text'
            name='displayName'
            value={signup.displayName}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>email:</span>
          <input
            id='email'
            type='email'
            name='email'
            value={signup.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            id='password'
            type='password'
            name='password'
            value={signup.password}
            onChange={handleChange}
          />
        </label>
        {!isPending && <button className='btn'>Sign Up</button>}
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
