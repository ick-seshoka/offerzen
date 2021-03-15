import React from "react";
import PropTypes from "prop-types";

import { Container, Title, SortIcon } from "./styles";

const TableHeader = ({ TableHeaders }) => {
  const headers = TableHeaders.map(({ title, sortEnabled, id }) => {
    return (
      <Title key={id}>
        {title && title}
        {sortEnabled && <SortIcon />}
      </Title>
    );
  });

  return <Container>{headers}</Container>;
};

TableHeader.defaultProps = {
  TableHeaders: [
    { id: 1, title: "candidate", sortEnabled: false },
    { id: 2, title: "role", sortEnabled: false },
    { id: 3, title: "last communication", sortEnabled: true },
    { id: 4, title: "salary", sortEnabled: false },
    { id: 5, title: "sent by", sortEnabled: false },
  ],
};

TableHeader.propTypes = {
  TableHeaders: PropTypes.array.isRequired,
};

export default TableHeader;
