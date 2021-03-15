import React from "react";

import InterviewsTable from "@components/interviewsTable";

import { Container, ContentWrap, Count } from "./styles";

const Interviews = () => (
  <Container>
    <ContentWrap>
      <Count>6 interview requests</Count>
      <InterviewsTable />
    </ContentWrap>
  </Container>
);

export default Interviews;
