import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  Title,
  Checkbox,
  ActiveCheckbox,
  InactiveCheckbox,
} from "./styles";

const Archived = ({ archived, setArchivedStatus }) => {
  const handleClick = () => {
    setArchivedStatus(!archived);
  };

  return (
    <Container>
      <Title>show archived</Title>
      <Checkbox onClick={handleClick}>
        {!archived && <InactiveCheckbox />}
        {archived && <ActiveCheckbox />}
      </Checkbox>
    </Container>
  );
};

Archived.defaultProps = {
  archived: false,
  setArchivedStatus: () => {},
};

Archived.propTypes = {
  archived: PropTypes.bool.isRequired,
  setArchivedStatus: PropTypes.func.isRequired,
};

export default Archived;
