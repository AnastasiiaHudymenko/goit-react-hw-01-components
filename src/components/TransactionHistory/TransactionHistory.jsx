import {
  TableTransaction,
  Thead,
  CaptionTransaction,
  TdTransaction,
  Tbody,
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
          <tr
            style={{ backgroundColor: `${i % 2 === 0 ? 'white' : '#c7c6c6'}` }}
            key={id}
          >
            <TdTransaction>{type}</TdTransaction>
            <TdTransaction>{amount}</TdTransaction>
            <TdTransaction>{currency}</TdTransaction>
          </tr>
        ))}
      </Tbody>
    </TableTransaction>
  );
}
