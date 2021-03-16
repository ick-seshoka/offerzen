import styled from "styled-components";

export const Container = styled.div`
  height: 3.75em;
  background: ${({ theme: { colors } }) => colors.white};
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: fit-content(12.5em) 1fr;
  align-content: center;
  max-width: 64em;
  margin: 0 auto;
  height: 3.75em;
`;
