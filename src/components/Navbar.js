import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

export const Navbar = () => {
  const [logout] = useLogout();

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
          <li>
            <button className='btn-secondary' onClick={() => logout()}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
