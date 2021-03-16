import React from "react";
import { Switch, Route } from "react-router-dom";

import InterviewRequests from "@pages/interviewRequests";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={InterviewRequests} />
      <Route component="" />
    </Switch>
  );
};

export default Router;
