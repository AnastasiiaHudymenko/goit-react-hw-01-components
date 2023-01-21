import PropTypes from 'prop-types';

import {
  ItemListFriend,
  StatusSpan,
  NameFriend,
} from './FriendListItem.styled';

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

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
