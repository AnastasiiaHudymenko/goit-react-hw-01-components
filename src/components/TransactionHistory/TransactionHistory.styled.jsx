import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  border-collapse: collapse;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 15px;
  overflow: hidden;
`;

export const Thead = styled.thead`
  background-color: #49b4b8;
  border-top: 1.5px solid #49b4b8;
  border-left: 1.5px solid #49b4b8;
  border-right: 1.5px solid #49b4b8; ;
`;

export const CaptionTransaction = styled.th(
  {
    fontWeight: 500,
    color: 'white',
    textTransform: 'uppercase',
    padding: '10px 90px',
  },
  props => ({
    paddingLeft: props.paddingLeft,
    borderLeft: props.borderLeft,
    borderRight: props.borderRight,
  }),

  props => ({
    paddingLeft: props.paddingLeft,
  })
);

export const TdTransaction = styled.td`
  padding: 10px 70px;
  border: 1px solid #fcf2f2;
`;

export const Tbody = styled.tbody`
  color: grey;
`;

export const Tr = styled.tr`
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
