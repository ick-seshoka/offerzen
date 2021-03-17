import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const InterviewsTable = ({
  headers,
  interviews,
  search,
  count,
  setCandidateArchivedStatusActive,
  setCandidateArchivedStatusInactive,
}) => (
  <Container>
    <TableHeader headers={headers} />
    <TableBody
      interviews={interviews}
      search={search}
      setCandidateArchivedStatusActive={setCandidateArchivedStatusActive}
      setCandidateArchivedStatusInactive={setCandidateArchivedStatusInactive}
      count={count}
    />
  </Container>
);

InterviewsTable.propTypes = {
  headers: PropTypes.array.isRequired,
  interviews: PropTypes.array.isRequired,
  count: PropTypes.number,
  search: PropTypes.string,
  setCandidateArchivedStatusActive: PropTypes.func.isRequired,
  setCandidateArchivedStatusInactive: PropTypes.func.isRequired,
  count: PropTypes.number,
};

export default InterviewsTable;
