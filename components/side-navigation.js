import styled from "styled-components";

const StyledSideNavigation = styled.nav`
  will-change: transform;
  transition: transform 0.2s ease-out;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(${props => (props.isVisible ? 0 : "-100%")});
  width: 400px;
  height: 100vh;
  background-color: red;
`;

const SideNavigation = props => {
  return (
    <StyledSideNavigation isVisible={props.isVisible}>
      Haaaaj
    </StyledSideNavigation>
  );
};

export default SideNavigation;
