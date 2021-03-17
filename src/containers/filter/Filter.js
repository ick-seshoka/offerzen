import React from "react";

import Search from "./search";
import Archived from "./archived";

import { Container, ContentWrap } from "./styles";

const Filter = () => (
  <Container>
    <ContentWrap>
      <Search />
      <Archived />
    </ContentWrap>
  </Container>
);

export default Filter;
