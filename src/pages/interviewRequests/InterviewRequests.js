import React from "react";

import Header from "@components/header";
import Interviews from "@containers/interviews";

import { Container } from "./styles";

const InterviewRequests = () => (
  <Container>
    <Header />
    <Interviews />
  </Container>
);

export default InterviewRequests;
