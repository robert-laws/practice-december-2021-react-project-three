import { useState } from 'react';

export const Signup = () => {
  const [signup, setSignup] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(signup);
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
        <button className='btn'>Sign Up</button>
      </form>
    </main>
  );
};
