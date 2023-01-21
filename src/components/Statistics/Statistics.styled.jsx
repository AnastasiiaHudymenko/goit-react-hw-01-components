import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  background-color: white;
  text-align: center;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 6px;
  width: 397px;
  overflow: hidden;
`;

export const TitleStatistics = styled.h2`
  font-size: 36px;
  color: #413939;
  padding: 30px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  color: white;
`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
`;

export const LabelSpan = styled.span`
  font-size: 18px;
`;

export const ParcentageSpan = styled.span`
  font-size: 31px;
  font-weight: 600;
`;
