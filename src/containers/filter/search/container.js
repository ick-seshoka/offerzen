import { connect } from "react-redux";
import { getFilterSearch, setSearchFilterValue } from "@modules/filter";

import Search from "./Search";

const mapStateToProps = (state) => ({
  search: getFilterSearch(state),
});

const mapDispatchToProps = {
  setSearchFilterValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
