import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Hamburger from "../icons/hamburger";
import SiteLogo from "../site-logo";

const SiteHeaderWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 24px 42px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconHamburger = styled(Hamburger)`
  cursor: pointer;
  width: 24px;
  height: 14px;
`;

const IconSet = styled.div`
  display: flex;
`;

const HorizontalNavigation = styled.div`
  opacity: ${props => (props.isVisible ? 1 : 0)};
  pointer-events: ${props => (props.isVisible ? "inherit" : "none")};
  display: flex;
  margin-top: 32px;
  justify-content: center;
`;

const NavigationButton = styled.button`
  margin: 0 32px;
`;

class SiteHeader extends React.Component {
  render() {
    return (
      <SiteHeaderWrapper>
        <TopBar>
          <IconHamburger />

          <SiteLogo />

          <IconSet>
            {/* <IconSearch />
        <IconAccount />
        <ShoppingCount /> */}
          </IconSet>
        </TopBar>

        <HorizontalNavigation isVisible={this.props.isNavigationVisible}>
          <NavigationButton>Latest</NavigationButton>
          <NavigationButton>Apparel</NavigationButton>
          <NavigationButton>Footwear</NavigationButton>
          <NavigationButton>Brands</NavigationButton>
          <NavigationButton>Accessories</NavigationButton>
          <NavigationButton>Blog</NavigationButton>
        </HorizontalNavigation>
      </SiteHeaderWrapper>
    );
  }
}

export default connect()(SiteHeader);
