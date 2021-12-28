import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

export const Navbar = () => {
  const [logout] = useLogout();
  const { user } = useAuthContext();

  return (
    <header className='navbar'>
      <nav>
        <div className='title'>
          <Link to='/'>Money App</Link>
        </div>
        <ul>
          {!user && (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/signup'>Signup</Link>
              </li>
            </>
          )}

          {user && <li className='hello-text'>user: {user.displayName}</li>}

          <li>
            <Link to='/'>Home</Link>
          </li>

          {user && (
            <>
              <li>
                <Link to='/transaction'>Transaction</Link>
              </li>
              <li>
                <button className='btn-secondary' onClick={() => logout()}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
