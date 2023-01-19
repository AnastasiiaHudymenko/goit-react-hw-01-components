import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  background-color: white;
  border-radius: 4px;
  width: 380px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px 10px;
`;

export const PhotoUser = styled.img`
  width: 170px;
`;

export const NameUser = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

export const TagUserAndLocation = styled.p`
  color: grey;
  font-size: 28px;
`;

export const StatsList = styled.ul`
  display: flex;
  font-size: 20px;
  justify-content: space-evenly;
  background-color: rgb(165, 180, 185);
`;

export const ItemList = styled.li`
  padding: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 500;
  color: grey;
  font-size: 18px;
`;

export const QuantityStats = styled.span`
  font-weight: 600;
  font-size: 24px;
`;
