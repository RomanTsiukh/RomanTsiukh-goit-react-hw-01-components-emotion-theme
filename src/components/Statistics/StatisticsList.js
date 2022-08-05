import { Statistics } from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  /* margin-left: auto;
  margin-right: auto;
  text-align: center; */
  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.7);
  outline: 2px solid black;
  width: 350px;

  /* margin-bottom: ${p => p.theme.space[5]}px; */
  /* background-color: ${p => p.theme.colors.firstBgColor}; */
`;

const Titel = styled.h2`
  padding: ${p => p.theme.space[3]}px;
`;

const List = styled.ul`
  display: flex;
`;

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
