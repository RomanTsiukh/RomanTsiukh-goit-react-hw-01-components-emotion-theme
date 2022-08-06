import { FriendListItem } from 'components/Friends/FriendListItem';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const List = styled.ul`
  width: 350px;
`;

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          ava={friend.avatar}
          name={friend.name}
        />
      ))}
    </List>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
