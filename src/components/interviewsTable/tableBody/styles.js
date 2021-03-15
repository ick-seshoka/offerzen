import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: ${({ theme: { padding } }) => padding.medium};
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.jumbo};
  text-transform: capitalize;
  text-align: center;
`;

export const Image = styled.img`
  width: 1.875em;
  height: 1.875em;
  border-radius: 50%;
`;

export const UnreadIcon = styled.div`
  width: 0.8em;
  height: 0.8em;
  background-color: ${({ theme: { colors } }) => colors.jungleGreen};
  border-radius: 50%;
`;

export const Date = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  color: ${({ theme: { colors } }) => colors.grayChateau};
`;
