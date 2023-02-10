import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import {
  TransactionTable,
  TableHeader,
} from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <TableHeader>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHeader>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
