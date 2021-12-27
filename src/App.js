import './sass/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound, Signup } from './pages';
import { Navbar, PrivateRoute } from './components';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='app'>
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/login'
              element={
                <PrivateRoute user={user}>
                  <Login />
                </PrivateRoute>
              }
            />
            <Route
              path='/signup'
              element={
                <PrivateRoute user={user}>
                  <Signup />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
