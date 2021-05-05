import React from "react";

import XHome from "../containers/home";
import XAuthcode from "../containers/authcode";
import XUserpass from "../containers/userpass";
import XImplicit from "../containers/implicit";
import XCredentials from "../containers/credentials";

import { Box } from "@chakra-ui/layout";
import { Route, Switch } from "react-router";

const CMain = () => {
  return (
    <Box p={5}>
      <Switch>
        <Route exact path="/" component={XHome} />
        <Route exact path="/authorizationcode" component={XAuthcode} />
        <Route exact path="/userpassword" component={XUserpass} />
        <Route exact path="/implicit" component={XImplicit} />
        <Route exact path="/clientcredentials" component={XCredentials} />
      </Switch>
    </Box>
  );
};

export default CMain;
