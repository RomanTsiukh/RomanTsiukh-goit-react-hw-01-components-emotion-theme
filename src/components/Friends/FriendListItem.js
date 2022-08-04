import PropTypes from 'prop-types';
import { Item, Image, Name, Status } from './Friends.styled';

export function FriendListItem(props) {
  const { ava, name, isOnline } = props;
  return (
    <Item>
      <Status status={isOnline}>{isOnline}</Status>
      <Image src={ava} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  ava: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
