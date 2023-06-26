import s from './TransactionHistory.module.css';
// import PropTypes from 'prop-types';

interface IItems {
  id: string;
  type: string;
  amount: string;
  currency: string;
};

interface IProps {
  items: IItems[];
};

const TransactionHistory = ({ items }: IProps) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// TransactionHistory.prototype = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default TransactionHistory;
