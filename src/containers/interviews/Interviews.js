import React from "react";
import PropTypes from "prop-types";

import InterviewsTable from "./interviewsTable";

import { Container, ContentWrap, Count } from "./styles";

const Interviews = ({ count }) => (
  <Container>
    <ContentWrap>
      <Count>{count} interview requests</Count>
      <InterviewsTable />
    </ContentWrap>
  </Container>
);

Interviews.defaultProps = {
  count: 0,
};

Interviews.propTypes = {
  count: PropTypes.number.isRequired,
  search: PropTypes.string,
};

export default Interviews;
