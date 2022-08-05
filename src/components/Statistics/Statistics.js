import PropTypes from 'prop-types';
// import {
//   Item,
//   Label,
//   Value
// } from './Statistics.styled';
import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Item = styled.li`
  width: calc(100% / 2);
  display: flex;
  flex-direction: column;
  outline: 1px solid black;

  background-color: ${p => getRandomHexColor()};
  padding: ${p => p.theme.space[3]}px 0 ${p => p.theme.space[3]}px 0;
`;

const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

const Value = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;

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
