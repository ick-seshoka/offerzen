import { connect } from "react-redux";

import { getArchivedStatus, setArchivedStatus } from "@modules/filter";

import Archived from "./Archived";

const mapStateToProps = (state) => ({
  archived: getArchivedStatus(state),
});

const mapDispatchToProps = {
  setArchivedStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Archived);
