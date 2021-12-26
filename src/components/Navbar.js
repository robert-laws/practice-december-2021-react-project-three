import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className='navbar'>
      <nav>
        <div className='title'>
          <Link to='/'>Money App</Link>
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
