import { connect } from "react-redux";

import {
  getFilteredCandidateInterviews,
  getCandidatesCount,
} from "@modules/interviews";

import { headers } from "@modules/interviews";

import InterviewsTable from "./InterviewsTable";

const mapStateToProps = (state) => ({
  interviews: getFilteredCandidateInterviews(state),
  count: getCandidatesCount(state),
  headers,
});

export default connect(mapStateToProps)(InterviewsTable);
