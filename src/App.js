import './sass/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound, Signup } from './pages';
import { Navbar } from './components';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className='app'>
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
