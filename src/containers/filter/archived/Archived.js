import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  Title,
  Checkbox,
  ActiveCheckbox,
  InactiveCheckbox,
} from "./styles";

const Archived = ({ active }) => (
  <Container>
    <Title>show archived</Title>
    <Checkbox>
      {!active && <InactiveCheckbox />}
      {active && <ActiveCheckbox />}
    </Checkbox>
  </Container>
);

Archived.defaultProps = {
  active: false,
};

Archived.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Archived;
