import { Statistics } from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';
import { Container, Titel, List } from './Statistics.styled';

export function StatisticsList(props) {
  const { title, stats } = props;

  return (
    <Container>
      {title && <Titel>{title}</Titel>}

      <List>
        {stats.map(item => (
          <Statistics
            key={item.id}
            lab={item.label}
            percent={item.percentage}
          />
        ))}
      </List>
    </Container>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
    })
  ),
};
