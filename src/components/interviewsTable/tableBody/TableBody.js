import React from "react";

import {
  Container,
  ContentWrap,
  Text,
  Image,
  UnreadIcon,
  Date,
} from "./styles";

const TableBody = ({ candidates }) => {
  const candidatesList = candidates.map(
    ({
      image,
      candidate,
      role,
      last_comms: { unread, description, date_time },
      salary,
      sent_by,
    }) => {
      return (
        <>
          <ContentWrap>
            <Image src={image} alt="candidate profile image" />
            <Text>{candidate}</Text>
            <Text>{role}</Text>
            <Text>
              {unread && <UnreadIcon />}
              {description}
              <Date>{date_time}</Date>
            </Text>
            <Text>{salary}</Text>
            <Text>{sent_by}</Text>
          </ContentWrap>
        </>
      );
    }
  );
  return <Container>{candidatesList}</Container>;
};

export default TableBody;
