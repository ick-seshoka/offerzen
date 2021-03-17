import { connect } from "react-redux";
import { getCandidatesCount } from "@modules/interviews";

import Interviews from "./Interviews";

const mapStateToProps = (state) => {
  return {
    count: getCandidatesCount(state),
  };
};

export default connect(mapStateToProps)(Interviews);
