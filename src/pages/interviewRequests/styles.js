import styled from "styled-components";

import BoxSource from "@components/box";
import Loader from "@components/loader";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 3.75em 3.75em 1fr;
  min-height: 100%;
`;

export const Box = styled(BoxSource)``;

export const PulsingHeart = styled(Loader)`
  margin-right: 1em;
`;
