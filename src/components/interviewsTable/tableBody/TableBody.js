import React from "react";
import PropTypes from "prop-types";

import { formatNumber, formatDate } from "@helpers";

import {
  Container,
  ContentWrap,
  Text,
  Image,
  UnreadIcon,
  Date,
  EmptyRow,
  SearchValue,
  Emoji,
  Arcvhived,
} from "./styles";

const TableBody = ({ interviews, count, search }) => {
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
        archived,
      },
      index
    ) => {
      return (
        <ContentWrap key={index} unread={unread} archived={archived}>
          <Text>
            <Image src={image} alt="candidate profile image" />
            {candidate}
          </Text>
          <Text>{role || "-"}</Text>
          <Text>
            {unread && <UnreadIcon status={status} />}
            {description}
            <Date>{formatDate(date_time)}</Date>
          </Text>
          <Text>{formatNumber(salary)}</Text>
          <Text>{sent_by}</Text>
          <Arcvhived>{archived ? "unarchive" : "archive"}</Arcvhived>
        </ContentWrap>
      );
    }
  );

  return interviews.length ? (
    <Container count={count}>{interviewItems}</Container>
  ) : (
    <EmptyRow>
      <Emoji>😔</Emoji>
      we don't seem to have a candidate with name{" "}
      <SearchValue>{search}</SearchValue>
    </EmptyRow>
  );
};

TableBody.defaultProps = {
  interviews: [],
  count: 0,
  search: "",
};

TableBody.propTypes = {
  interviews: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  search: PropTypes.string,
};

export default TableBody;
