import React from "react";
import { connect } from "react-redux";
import { showHeaderNavigation, hideHeaderNavigation } from "../store";
import SiteWrapper from "../components/site-wrapper";

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    return {};
  }

  componentDidMount() {
    console.log(this.props.showHeaderNavigation());
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <SiteWrapper>Home page</SiteWrapper>
      </div>
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
