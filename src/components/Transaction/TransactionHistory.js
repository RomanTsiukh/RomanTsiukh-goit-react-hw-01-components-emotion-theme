import PropTypes from 'prop-types';

import { Table, Thead, BodyCell, Row, TheadCell } from './Transaction.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <Row>
          <TheadCell>Type</TheadCell>
          <TheadCell>Amount</TheadCell>
          <TheadCell>Currency</TheadCell>
        </Row>
      </Thead>

      <tbody>
        {items.map(item => (
          <Row key={item.id}>
            <BodyCell>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </BodyCell>
            <BodyCell>{item.amount}</BodyCell>
            <BodyCell>{item.currency}</BodyCell>
          </Row>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
