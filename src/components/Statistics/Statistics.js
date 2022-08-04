import PropTypes from 'prop-types';
import { Item, Label, Value } from './Statistics.styled';

export function Statistics(props) {
  const { lab, percent } = props;
  return (
    <Item>
      <Label>{lab}</Label>
      <Value>{percent}%</Value>
    </Item>
  );
}

Statistics.propTypes = {
  lab: PropTypes.node.isRequired,
  percent: PropTypes.number.isRequired,
};
