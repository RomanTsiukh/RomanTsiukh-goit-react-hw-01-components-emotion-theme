import PropTypes from 'prop-types';
import { 
  Container, 
  Description, 
  Image, 
  Name, 
  Tag, 
  Location, 
  List, 
  ListItem, 
  Text, 
  Value 
} from './Profile.styled';

export function Profile(props) {
    console.log(props)
    const { link, usname, ustag, locat, folowers, views, likes } = props
    return (
      <Container>
        <Description>
          <Image src={link} alt="User avatar"/>
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
  };

  Profile.propTypes = {
    link: PropTypes.string.isRequired,
    usname: PropTypes.string.isRequired,
    ustag: PropTypes.string.isRequired,
    locat: PropTypes.string.isRequired,
    folowers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  };