import { connect } from "react-redux";

import {
  getFilteredCandidateInterviews,
  getCandidatesCount,
  setCandidateArchivedStatusActive,
  setCandidateArchivedStatusInactive,
} from "@modules/interviews";
import { getFilterSearch } from "@modules/filter";
import { headers } from "@modules/interviews";

import InterviewsTable from "./InterviewsTable";

const mapStateToProps = (state) => ({
  interviews: getFilteredCandidateInterviews(state),
  count: getCandidatesCount(state),
  headers,
  search: getFilterSearch(state),
});

const mapDispatchToProps = {
  setCandidateArchivedStatusActive,
  setCandidateArchivedStatusInactive,
};

export default connect(mapStateToProps, mapDispatchToProps)(InterviewsTable);
