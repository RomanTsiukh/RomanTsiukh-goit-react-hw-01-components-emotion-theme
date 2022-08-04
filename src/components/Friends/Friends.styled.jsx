import styled from '@emotion/styled';

export const List = styled.ul`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: center;
`;

export const Item = styled.li`
  padding: 10px 20px;
  width: 100;
  display: flex;
  justify-content: center;
  outline: 1px solid black;
  margin-bottom: 10px;
  background-color: var(--first-bg-color);
  align-items: center;
  box-shadow: 0px 4px 12px 0px rgba(100, 99, 99, 0.7);
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 20px;

  background-color: ${props => (props.status ? 'green' : 'red')};
  }};
`;

export const Image = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 22px;
`;
