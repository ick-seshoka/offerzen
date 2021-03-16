import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  ContentWrap,
  Text,
  Image,
  UnreadIcon,
  Date,
} from "./styles";

const TableBody = ({ interviews, count }) => {
  const interviewItems = interviews.map(
    (
      {
        image,
        candidate,
        role,
        last_comms: { unread, description, date_time },
        salary,
        sent_by,
        status,
      },
      index
    ) => {
      return (
        <ContentWrap key={index} unread={unread}>
          <Text>
            <Image src={image} alt="candidate profile image" />
            {candidate}
          </Text>
          <Text>{role || "-"}</Text>
          <Text>
            {unread && <UnreadIcon status={status} />}
            {description}
            <Date>{date_time}</Date>
          </Text>
          <Text>{salary}</Text>
          <Text>{sent_by}</Text>
        </ContentWrap>
      );
    }
  );
  return <Container>{interviewItems}</Container>;
};

TableBody.defaultProps = {
  interviews: [],
  count: 0,
};

TableBody.propTypes = {
  interviews: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};

export default TableBody;
