import styled from "@emotion/styled";

const MyDiv = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.colors[theme.primaryColor][0]};
  padding: 5rem;
  font-size: 24pt;
  font-family: sans-serif;
`;

function MyComponent() {
  return <MyDiv>This has some content</MyDiv>;
}

export default MyComponent;
