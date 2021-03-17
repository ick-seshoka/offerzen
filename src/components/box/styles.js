import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.grayChateau};
  padding: ${({ theme: { padding } }) => padding.medium};
  background-color: ${({ theme: { colors } }) => colors.athensGray};
  width: 67em;
  margin: 0 auto;
  margin-top: 5em;
  min-height: 16em;
`;
