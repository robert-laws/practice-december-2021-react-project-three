import { useState } from 'react';

export const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(login);
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
            value={login.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            id='password'
            type='password'
            name='password'
            value={login.password}
            onChange={handleChange}
          />
        </label>
        <button className='btn'>Login</button>
      </form>
    </main>
  );
};
