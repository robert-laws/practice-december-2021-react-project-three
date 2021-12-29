import { getAuth } from 'firebase/auth';

export const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <main className='layout-960'>
      <h1>Home</h1>
      {user ? `hello, ${user.displayName}!` : 'hello, guest'}
      <hr />
      <section>
        <h2>Welcome to the Money App</h2>
        <p>
          Use this app to add and list transactions and the amount of money
          spent.
        </p>
      </section>
    </main>
  );
};
