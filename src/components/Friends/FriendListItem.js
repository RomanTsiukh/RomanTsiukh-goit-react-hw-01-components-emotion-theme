import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Item = styled.li`
  width: 100;
  display: flex;
  justify-content: center;
  outline: 1px solid black;
  align-items: center;
  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.7);

  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.firstBgColor};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Status = styled.span`
  width: 10px;
  height: 10px;

  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.space[4]}px;
  background-color: ${p => {
    return p.status ? p.theme.colors.onlineColor : p.theme.colors.offlineColor;
  }};
`;

const Image = styled.img`
  margin-right: ${p => p.theme.space[4]}px;
`;

const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;

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
