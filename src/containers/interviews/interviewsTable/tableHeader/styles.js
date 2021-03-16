import styled from "styled-components";

import SortIconSource from "@assets/icons/sort-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 13em 12.375em 17.0625em 8.625em 7.8125em auto;
  background-color: ${({ theme: { colors } }) => colors.athensGray};
  padding: ${({ theme: { padding } }) => padding.medium};
`;

export const Title = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  font-weight: 600;
  text-transform: capitalize;
  color: ${({ theme: { colors } }) => colors.oxfordBlue};
`;

export const SortIcon = styled.img.attrs({
  src: SortIconSource,
})`
  width: 0.6375em;
  height: 0.825em;
  margin-left: 0.3em;
`;
