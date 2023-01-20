import {
  ProfileCard,
  Description,
  PhotoUser,
  NameUser,
  TagUserAndLocation,
  StatsList,
  ItemList,
  Label,
  QuantityStats,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <Description>
        <PhotoUser src={avatar} alt={username} />
        <NameUser>{username}</NameUser>
        <TagUserAndLocation>@${tag}</TagUserAndLocation>
        <TagUserAndLocation>{location}</TagUserAndLocation>
      </Description>

      <StatsList>
        <ItemList>
          <Label>Followers</Label>
          <QuantityStats>{followers}</QuantityStats>
        </ItemList>
        <ItemList>
          <Label>Views</Label>
          <QuantityStats>{views}</QuantityStats>
        </ItemList>
        <ItemList>
          <Label>Likes</Label>
          <QuantityStats>{likes}</QuantityStats>
        </ItemList>
      </StatsList>
    </ProfileCard>
  );
}
