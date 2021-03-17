import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const InterviewsTable = ({
  headers,
  interviews,
  count,
  search,
  setCandidateArchivedStatusInactive,
  setCandidateArchivedStatusActive,
}) => (
  <Container>
    <TableHeader headers={headers} />
    <TableBody
      interviews={interviews}
      search={search}
      count={count}
      setCandidateArchivedStatusActive={setCandidateArchivedStatusActive}
      setCandidateArchivedStatusInactive={setCandidateArchivedStatusInactive}
    />
  </Container>
);

InterviewsTable.propTypes = {
  headers: PropTypes.array.isRequired,
  interviews: PropTypes.array.isRequired,
  search: PropTypes.string,
  setCandidateArchivedStatusActive: PropTypes.func.isRequired,
  setCandidateArchivedStatusInactive: PropTypes.func.isRequired,
};

export default InterviewsTable;
