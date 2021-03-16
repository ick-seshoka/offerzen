import React from "react";
import PropTypes from "prop-types";

import InterviewsTable from "@components/interviewsTable";

import { Container, ContentWrap, Count } from "./styles";

const Interviews = ({ interviews, count, headers, search }) => (
  <Container>
    <ContentWrap>
      <Count>{count} interview requests</Count>
      <InterviewsTable
        interviews={interviews}
        headers={headers}
        search={search}
      />
    </ContentWrap>
  </Container>
);

Interviews.defaultProps = {
  interviews: [],
  count: 0,
  headers: [],
  search: "",
};

Interviews.propTypes = {
  interviews: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  search: PropTypes.string,
};

export default Interviews;
