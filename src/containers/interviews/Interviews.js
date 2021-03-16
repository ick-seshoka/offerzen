import React from "react";
import PropTypes from "prop-types";

import InterviewsTable from "@components/interviewsTable";

import { Container, ContentWrap, Count } from "./styles";

const Interviews = ({ interviews, count, headers }) => (
  <Container>
    <ContentWrap>
      <Count>{count} interview requests</Count>
      <InterviewsTable interviews={interviews} headers={headers} />
    </ContentWrap>
  </Container>
);

Interviews.defaultProps = {
  interviews: [],
  count: 0,
  headers: [],
};

Interviews.propTypes = {
  interviews: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};

export default Interviews;
