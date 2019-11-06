import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { showHeaderNavigation } from "../../store";
import styled from "styled-components";
import useHideOnScroll from "../../hooks/use-hide-on-scroll";
import Hamburger from "../icons/hamburger";
import SiteLogo from "../site-logo";
import Link from "next/link";

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

const StyledLink = styled.a`
  display: inline-block;
  margin: 0 32px;
`;

const buttons = [
  {
    title: "Latest",
    slug: "latest"
  },
  {
    title: "Apparel",
    slug: "apparel"
  },
  {
    title: "Footwear",
    slug: "footwear"
  },
  {
    title: "Brands",
    slug: "brands"
  },
  {
    title: "Blog",
    slug: "blog"
  }
];

const SiteHeader = () => {
  const dispatch = useDispatch();

  const onClickHamburger = () => {
    dispatch(showHeaderNavigation());
  };

  return (
    <StyledSiteHeader>
      <TopBar>
        <IconHamburger onClick={onClickHamburger} />

        <SiteLogo />

        <IconSet>
          {/* <IconSearch />
        <IconAccount />
        <ShoppingCount /> */}
        </IconSet>
      </TopBar>

      <HorizontalNavigation isVisible={useHideOnScroll()}>
        {buttons.map(link => (
          <Link
            href="/collections/[collection]"
            as={`/collections/${link.slug}`}
            passHref
            key={link.slug}
          >
            <StyledLink>{link.title}</StyledLink>
          </Link>
        ))}
      </HorizontalNavigation>
    </StyledSiteHeader>
  );
};

export default SiteHeader;
