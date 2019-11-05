import React, { useState } from "react";
import styled from "styled-components";
import { useScrollPosition } from "../../hooks/use-scroll-position";
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
  will-change: opacity;
  transition: opacity 0.25s ease-out;
  opacity: ${props => (props.isHorizontalNavigationVisible ? 1 : 0)};
  pointer-events: ${props =>
    props.isHorizontalNavigationVisible ? "inherit" : "none"};
  display: flex;
  margin-top: 32px;
  justify-content: center;
`;

const NavigationButton = styled.button`
  margin: 0 32px;
`;

export function HideOnScroll({ children }) {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return children(hideOnScroll);
}

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

        <HideOnScroll>
          {isHorizontalNavigationVisible => (
            <HorizontalNavigation
              isHorizontalNavigationVisible={isHorizontalNavigationVisible}
            >
              <NavigationButton>Latest</NavigationButton>
              <NavigationButton>Apparel</NavigationButton>
              <NavigationButton>Footwear</NavigationButton>
              <NavigationButton>Brands</NavigationButton>
              <NavigationButton>Accessories</NavigationButton>
              <NavigationButton>Blog</NavigationButton>
            </HorizontalNavigation>
          )}
        </HideOnScroll>
      </SiteHeaderWrapper>
    );
  }
}

export default SiteHeader;
