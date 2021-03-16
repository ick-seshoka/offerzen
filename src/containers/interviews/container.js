import { connect } from "react-redux";
import {
  getCandidateInterviews,
  getCandidatesCount,
} from "@modules/interviews";
import { headers } from "@modules/interviews";

import Interviews from "./Interviews";

const mapStateToProps = (state) => {
  return {
    interviews: getCandidateInterviews(state),
    count: getCandidatesCount(state),
    headers,
  };
};

export default connect(mapStateToProps)(Interviews);
