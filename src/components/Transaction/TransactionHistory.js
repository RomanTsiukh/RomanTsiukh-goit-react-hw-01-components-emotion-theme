import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export const Table = styled.table`
  /* margin-left: auto;
  margin-right: auto; */
  table-layout: fixed;
  width: 350px;
  border-collapse: collapse;
  /* text-align: center; */

  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.75);
  border: 2px solid rgb(249, 246, 246);
`;

export const Thead = styled.thead`
  text-transform: uppercase;

  background-color: ${p => p.theme.colors.thirdDgColor};
  color: ${p => p.theme.colors.thirdTextColor};
`;

export const TheadCell = styled.th`
  vertical-align: middle;
  text-align: center;
  border: 2px solid rgb(249, 246, 246);

  &:nth-of-type(1) {
    width: 35%;
  }

  &:nth-of-type(2) {
    width: 30%;
  }

  &:nth-of-type(3) {
    width: 35%;
  }

  padding: ${p => p.theme.space[3]}px;
`;

export const BodyCell = styled.td`
  vertical-align: middle;
  text-align: center;
  border: 2px solid rgb(249, 246, 246);

  padding: ${p => p.theme.space[3]}px;
`;

export const Row = styled.tr`
  border: 2px solid rgb(249, 246, 246);

  &:nth-of-type(even) {
    background-color: ${p => p.theme.colors.secondBgColor};
  }
`;

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
