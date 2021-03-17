import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme: { colors } }) => colors.catskillWhite};
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 67em;
  margin: 0 auto;
`;

export const Count = styled.p`
  color: ${({ theme: { colors } }) => colors.jumbo};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  padding-top: ${({ theme: { padding } }) => padding.medium};
  padding-bottom: ${({ theme: { padding } }) => padding.small};
  align-self: flex-end;
  font-weight: 600;
  text-transform: capitalize;
`;
