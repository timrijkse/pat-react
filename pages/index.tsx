import * as React from "react";
import { connect } from "react-redux";
import { showHeaderNavigation, hideHeaderNavigation } from "../store";
import DefaultLayout from "../layouts/default";
import SiteWrapper from "../components/site-wrapper";

const Index = props => {
  return (
    <DefaultLayout>
      <SiteWrapper>
        <h1>Hello World</h1>
      </SiteWrapper>
    </DefaultLayout>
  );
};

export default Index;
