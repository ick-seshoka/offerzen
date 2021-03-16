import styled from "styled-components";

import SearchIconSource from "@assets/icons/search-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1.6px solid ${({ theme: { colors } }) => colors.iconStroke};
  width: 100%;
  height: 2em;
  border-radius: 3px;
  align-items: center;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})`
  border: none;
  background: transparent;
  margin-left: 0.3em;
  margin-right: 0.3em;
  outline: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.grayChateau};

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.grayChateau};
  }
`;

export const SearchIcon = styled.img.attrs({ src: SearchIconSource })`
  width: 0.9375em;
  height: 0.9375em;
  margin-right: 0.2em;
`;
