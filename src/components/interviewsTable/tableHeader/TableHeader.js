import React from "react";
import PropTypes from "prop-types";

import { Container, Title, SortIcon } from "./styles";

const TableHeader = ({ TableHeaders }) => {
  const headers = TableHeaders.map(({ title, sortEnabled }) => {
    return (
      <Title>
        {title && title}
        {sortEnabled && <SortIcon />}
      </Title>
    );
  });

  return <Container>{headers}</Container>;
};

TableHeader.defaultProps = {
  TableHeaders: [
    { title: "candidate", sortEnabled: false },
    { title: "role", sortEnabled: false },
    { title: "last communication", sortEnabled: true },
    { title: "salary", sortEnabled: false },
    { title: "sent by", sortEnabled: false },
  ],
};

TableHeader.propTypes = {
  TableHeaders: PropTypes.array.isRequired,
};

export default TableHeader;
