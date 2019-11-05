import React, { useState } from "react";
import styled from "styled-components";
import useHideOnScroll from "../../hooks/use-hide-on-scroll";
import Hamburger from "../icons/hamburger";
import SiteLogo from "../site-logo";

const StyledSiteHeader = styled.nav`
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
  will-change: opacity;
  transition: opacity 0.25s ease-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  pointer-events: ${props => (props.isVisible ? "inherit" : "none")};
  display: flex;
  margin-top: 32px;
  justify-content: center;
`;

const NavigationButton = styled.button`
  margin: 0 32px;
`;

const SiteHeader = () => {
  return (
    <StyledSiteHeader>
      <TopBar>
        <IconHamburger />

        <SiteLogo />

        <IconSet>
          {/* <IconSearch />
        <IconAccount />
        <ShoppingCount /> */}
        </IconSet>
      </TopBar>

      <HorizontalNavigation isVisible={useHideOnScroll()}>
        <NavigationButton>Latest</NavigationButton>
        <NavigationButton>Apparel</NavigationButton>
        <NavigationButton>Footwear</NavigationButton>
        <NavigationButton>Brands</NavigationButton>
        <NavigationButton>Accessories</NavigationButton>
        <NavigationButton>Blog</NavigationButton>
      </HorizontalNavigation>
    </StyledSiteHeader>
  );
};

export default SiteHeader;
