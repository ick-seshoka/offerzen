import { connect } from "react-redux";
import {
  getFilteredCandidateInterviews,
  getCandidatesCount,
} from "@modules/interviews";
import { getFilterSearch } from "@modules/filter";
import { headers } from "@modules/interviews";

import Interviews from "./Interviews";

const mapStateToProps = (state) => {
  return {
    interviews: getFilteredCandidateInterviews(state),
    count: getCandidatesCount(state),
    headers,
    search: getFilterSearch(state),
  };
};

export default connect(mapStateToProps)(Interviews);
