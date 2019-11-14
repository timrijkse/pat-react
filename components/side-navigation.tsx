import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideHeaderNavigation } from "../store";
import styled from "styled-components";

const Background = styled.div`
  will-change: opacity;
  transition: opacity 0.2s ease-out;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
`;

const Content = styled.div`
  will-change: transform;
  transition: transform 0.2s ease-out;
  position: relative;
  width: 400px;
  height: 100%;
  padding: 32px;
  background-color: #fff;
  z-index: 2;
`;

const StyledSideNavigation = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: ${props => (props.isSideNavigationVisible ? "100vw" : 0)};
  height: 100vh;

  ${Content} {
    transform: translateX(
      ${props => (props.isSideNavigationVisible ? 0 : "-100%")}
    );
  }

  ${Background} {
    opacity: ${props => (props.isSideNavigationVisible ? 1 : 0)};
    pointer-events: ${props =>
      props.isSideNavigationVisible ? "inherit" : "none"};
  }
`;

const SideNavigation = props => {
  const isSideNavigationVisible = useSelector(
    state => state.isSideNavigationVisible
  );

  const dispatch = useDispatch();

  const onClickBackground = () => {
    dispatch(hideHeaderNavigation());
  };

  return (
    <StyledSideNavigation isSideNavigationVisible={isSideNavigationVisible}>
      <Background onClick={onClickBackground} />

      <Content>goi</Content>
    </StyledSideNavigation>
  );
};

export default SideNavigation;
