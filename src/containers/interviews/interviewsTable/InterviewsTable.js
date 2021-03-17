import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const InterviewsTable = ({ headers, interviews, count }) => (
  <Container>
    <TableHeader headers={headers} />
    <TableBody interviews={interviews} />
  </Container>
);

InterviewsTable.propTypes = {
  headers: PropTypes.array.isRequired,
  interviews: PropTypes.array.isRequired,
};

export default InterviewsTable;
