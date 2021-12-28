import { useState, useEffect } from 'react';
import { useFirestore } from '../hooks/useFirestore';

const TransactionForm = ({ uid }) => {
  const [transaction, setTransaction] = useState({
    name: '',
    amount: '',
  });
  const { response, addDocument } = useFirestore('transactions');

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(transaction);
    addDocument({ uid, ...transaction });
  };

  useEffect(() => {
    if (response.success) {
      setTransaction({
        name: '',
        amount: '',
      });
    }
  }, [response.success]);

  return (
    <form id='transaction-form' onSubmit={handleSubmit}>
      <label>
        <span>Name:</span>
        <input
          type='text'
          placeholder='enter a name'
          value={transaction.name}
          name='name'
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <span>Amount ($):</span>
        <input
          type='number'
          placeholder='enter an amount'
          value={transaction.amount}
          name='amount'
          onChange={handleChange}
          required
        />
      </label>
      <button>Add Transaction</button>
      {response.error && <p className='error'>{response.error}</p>}
    </form>
  );
};

export default TransactionForm;
