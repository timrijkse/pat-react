import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SiteHeader from "../components/site-header";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500vh;
  padding-top: 200px;
`;

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <SiteHeader
          isNavigationVisible={this.props.isHeaderNavigationVisible}
        />

        <ContentWrapper>{this.props.children}</ContentWrapper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isHeaderNavigationVisible } = state;
  return { isHeaderNavigationVisible };
}

export default connect(mapStateToProps)(DefaultLayout);
