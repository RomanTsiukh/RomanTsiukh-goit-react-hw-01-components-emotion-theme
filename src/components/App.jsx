import styled from '@emotion/styled';

const Text = styled.p`
  color: ${props => props.theme.colors.text};
`;

export function App() {
  return (
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, neque.
    </Text>
  );
}
