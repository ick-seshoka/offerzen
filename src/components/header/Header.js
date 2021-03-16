import React from "react";

import { Container, ContentWrap, Logo, Icon } from "./styles";

const Header = () => (
  <Container>
    <ContentWrap>
      <Logo to="/">
        <Icon />
      </Logo>
    </ContentWrap>
  </Container>
);

export default Header;
