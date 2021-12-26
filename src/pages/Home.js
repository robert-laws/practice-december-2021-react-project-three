import { getAuth } from 'firebase/auth';

export const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <main className='layout-960'>
      <h1>Home</h1>
      {user && user.displayName}
    </main>
  );
};
