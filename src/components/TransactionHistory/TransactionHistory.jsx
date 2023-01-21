import PropTypes from 'prop-types';

import {
  TableTransaction,
  Thead,
  CaptionTransaction,
  TdTransaction,
  Tbody,
  Tr,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TableTransaction>
      <Thead>
        <tr>
          <CaptionTransaction>Type</CaptionTransaction>
          <CaptionTransaction
            paddingLeft={64}
            borderLeft={'1px solid rgb(255 255 255 / 50%)'}
            borderRight={'1px solid rgb(255 255 255 / 50%)'}
          >
            Amount
          </CaptionTransaction>
          <CaptionTransaction paddingLeft={43}>Currency</CaptionTransaction>
        </tr>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }, i) => (
          <Tr
            style={{
              backgroundColor: `${i % 2 === 0 ? 'white' : '#c7c6c6'}`,
              boxShadow: `${
                i % 2 === 0
                  ? 'none'
                  : '0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset'
              }`,
            }}
            key={id}
          >
            <TdTransaction>{makeFirstUpperCaseLetter(type)}</TdTransaction>
            <TdTransaction>{amount}</TdTransaction>
            <TdTransaction>{currency}</TdTransaction>
          </Tr>
        ))}
      </Tbody>
    </TableTransaction>
  );
}

function makeFirstUpperCaseLetter(str) {
  return str.split('').reduce((acc, el, i, ar) => {
    acc += `${ar[i + 1] ? ar[i + 1] : ''}`;
    return acc;
  }, str[0].toUpperCase());
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string,
    })
  ),
};
