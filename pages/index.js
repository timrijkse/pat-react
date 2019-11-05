import React from "react";
import { connect } from "react-redux";
import { showHeaderNavigation, hideHeaderNavigation } from "../store";
import DefaultLayout from "../layouts/default";
import SiteWrapper from "../components/site-wrapper";

class Index extends React.Component {
  componentDidMount() {
    console.log("componentDidMount", this.props);
  }

  componentWillUnmount() {}

  render() {
    return (
      <DefaultLayout>
        <SiteWrapper>Home page</SiteWrapper>
      </DefaultLayout>
    );
  }
}

const mapDispatchToProps = {
  showHeaderNavigation
};

export default connect(
  null,
  mapDispatchToProps
)(Index);
