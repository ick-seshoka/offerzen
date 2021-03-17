import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Header from "@components/header";
import Filter from "@containers/filter";
import Interviews from "@containers/interviews";

import { Container, Box, PulsingHeart } from "./styles";

const InterviewRequests = ({ loading, fetchCandidateInterviews, count }) => {
  useEffect(() => {
    fetchCandidateInterviews();
  }, []);

  return (
    <Container>
      <Header />
      {!loading && (
        <>
          <Filter />
          <Interviews />
        </>
      )}
      {loading && (
        <Box>
          <PulsingHeart /> please wait while we fetch candidates ..
        </Box>
      )}
    </Container>
  );
};

InterviewRequests.defaultProps = {
  loading: false,
  fetchCandidateInterviews: () => {},
  count: 0,
};

InterviewRequests.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchCandidateInterviews: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default InterviewRequests;
