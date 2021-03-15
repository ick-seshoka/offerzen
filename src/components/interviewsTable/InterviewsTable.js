import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import TableHeader from "./tableHeader";

const InterviewsTable = ({ TableHeaders, data }) => (
  <Container>
    <TableHeader tableHeaders={TableHeaders} />
  </Container>
);

InterviewsTable.propTypes = {
  tableHeaders: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default InterviewsTable;
