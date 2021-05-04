import React from "react";

import XHome from "../containers/home";
import XAuthcode from "../containers/authcode";
import XUserpass from "../containers/userpass";
import XImplicit from "../containers/implicit";

import { Box } from "@chakra-ui/layout";
import { Route, Switch } from "react-router";

const CMain = () => {
  return (
    <Box w="full" p={5}>
      <Switch>
        <Route exact path="/" component={XHome} />
        <Route exact path="/authorizationcode" component={XAuthcode} />
        <Route exact path="/userpassword" component={XUserpass} />
        <Route exact path="/implicit" component={XImplicit} />
      </Switch>
    </Box>
  );
};

export default CMain;
