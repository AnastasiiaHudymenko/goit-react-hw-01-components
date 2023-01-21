import PropTypes from 'prop-types';

import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
