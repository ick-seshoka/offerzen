import React from "react";

import Header from "@components/header";
import Filter from "@containers/filter";
import Interviews from "@containers/interviews";

import { Container } from "./styles";

const InterviewRequests = () => (
  <Container>
    <Header />
    <Filter />
    <Interviews />
  </Container>
);

export default InterviewRequests;
