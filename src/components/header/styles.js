import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoIcon from "@assets/icons/logo-icon.svg";

export const Container = styled.div`
  height: 3.75em;
  background-color: ${({ theme: { colors } }) => colors.oxfordBlue};
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: fit-content(7.6825em);
  align-content: center;
  max-width: 75em;
  margin: 0 auto;
  height: 3.75em;
`;

export const Logo = styled(Link)``;

export const Icon = styled.img.attrs({
  src: LogoIcon,
})`
  width: 7.6825em;
  height: 1.5625em;
`;
