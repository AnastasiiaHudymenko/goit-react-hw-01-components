import {
  ItemListFriend,
  StatusSpan,
  NameFriend,
} from './FriendListItem.styles';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ItemListFriend>
      <StatusSpan
        style={{ backgroundColor: `${isOnline ? 'green' : 'red'}` }}
      ></StatusSpan>
      <img src={avatar} alt={name} width="48" />
      <NameFriend>{name}</NameFriend>
    </ItemListFriend>
  );
}
