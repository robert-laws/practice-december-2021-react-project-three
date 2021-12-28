import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';
import { useFirestore } from '../hooks/useFirestore';

export const Transaction = () => {
  const { user } = useAuthContext();
  const { documents, error, isLoading } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  );
  const { deleteDocument } = useFirestore('transactions');

  return (
    <main className='layout-960'>
      <h1>My Transactions</h1>
      <div className='transaction'>
        <div className='transaction-list'>
          <h3>All Transactions</h3>
          {isLoading && <p>Loading...</p>}
          {error && <p className='error'>{error}</p>}
          {!error && !isLoading && (
            <TransactionList
              transactions={documents}
              deleteDoc={deleteDocument}
            />
          )}
        </div>
        <div className='transaction-form'>
          <h3>New Transaction</h3>
          <TransactionForm uid={user.uid} />
        </div>
      </div>
    </main>
  );
};
