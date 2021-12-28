const TransactionList = ({ transactions, deleteDoc }) => {
  return (
    <ul className='list'>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <div>
            <p className='name'>{transaction.name}</p>
            <p className='amount'>${transaction.amount}</p>
          </div>
          <button onClick={() => deleteDoc(transaction.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
