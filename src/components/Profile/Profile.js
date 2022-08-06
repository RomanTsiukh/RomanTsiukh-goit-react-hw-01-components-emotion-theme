import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 350px;
  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.7);
  outline: 2px solid black;
`;

const Description = styled.div`
  padding: ${p => p.theme.space[4]}px;
  outline: 1px solid black;
`;

const Image = styled.img`
  width: 40%;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.secondTextColor};
`;

const Location = styled.p`
  color: ${p => p.theme.colors.secondTextColor};
`;
const List = styled.ul`
  display: flex;

  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.secondBgColor};
`;

const ListItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  outline: 1px solid black;

  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px;
`;

const Text = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondTextColor};
`;

const Value = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export function Profile(props) {
  console.log(props);
  const { link, usname, ustag, locat, folowers, views, likes } = props;
  return (
    <Container>
      <Description>
        <Image src={link} alt="User avatar" />
        <Name>{usname}</Name>
        <Tag>@{ustag}</Tag>
        <Location>{locat}</Location>
      </Description>

      <List>
        <ListItem>
          <Text>Followers</Text>
          <Value>{folowers}</Value>
        </ListItem>
        <ListItem>
          <Text>Views</Text>
          <Value>{views}</Value>
        </ListItem>
        <ListItem>
          <Text>Likes</Text>
          <Value>{likes}</Value>
        </ListItem>
      </List>
    </Container>
  );
}

Profile.propTypes = {
  link: PropTypes.string.isRequired,
  usname: PropTypes.string.isRequired,
  ustag: PropTypes.string.isRequired,
  locat: PropTypes.string.isRequired,
  folowers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
