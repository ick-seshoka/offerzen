import React from "react";
import PropTypes from "prop-types";

import { Container, Title, SortIcon } from "./styles";

const TableHeader = ({ headers }) => {
  const headersList = headers.map(({ title, sortEnabled, id }) => {
    return (
      <Title key={id}>
        {title && title}
        {sortEnabled && <SortIcon />}
      </Title>
    );
  });

  return <Container>{headersList}</Container>;
};

TableHeader.defaultProps = {
  headers: [
    { id: 1, title: "candidate", sortEnabled: false },
    { id: 2, title: "role", sortEnabled: false },
    { id: 3, title: "last communication", sortEnabled: true },
    { id: 4, title: "salary", sortEnabled: false },
    { id: 5, title: "sent by", sortEnabled: false },
  ],
};

TableHeader.propTypes = {
  headers: PropTypes.array.isRequired,
};

export default TableHeader;
