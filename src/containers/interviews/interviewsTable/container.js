import { connect } from "react-redux";

import {
  getCandidateInterviews,
  getCandidatesCount,
} from "@modules/interviews";

import { headers } from "@modules/interviews";

import InterviewsTable from "./InterviewsTable";

const mapStateToProps = (state) => ({
  interviews: getCandidateInterviews(state),
  count: getCandidatesCount(state),
  headers,
});

export default connect(mapStateToProps)(InterviewsTable);
