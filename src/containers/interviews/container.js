import { connect } from "react-redux";
import {
  getFilteredCandidateInterviews,
  getCandidatesCount,
} from "@modules/interviews";
import { headers } from "@modules/interviews";

import Interviews from "./Interviews";

const mapStateToProps = (state) => {
  return {
    interviews: getFilteredCandidateInterviews(state),
    count: getCandidatesCount(state),
    headers,
  };
};

export default connect(mapStateToProps)(Interviews);
