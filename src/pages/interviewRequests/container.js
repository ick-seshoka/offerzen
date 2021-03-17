import { connect } from "react-redux";

import {
  getCandidateInterviewsLoading,
  fetchCandidateInterviews,
  getCandidatesCount,
} from "@modules/interviews";

import InterviewRequests from "./InterviewRequests";

const mapStateToProps = (state) => ({
  loading: getCandidateInterviewsLoading(state),
  count: getCandidatesCount(state),
});

const mapDispatchToProps = {
  fetchCandidateInterviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(InterviewRequests);
