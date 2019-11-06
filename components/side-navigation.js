import { connect } from "react-redux";
import styled from "styled-components";

const StyledSideNavigation = styled.nav`
  will-change: transform;
  transition: transform 0.2s ease-out;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(
    ${props => (props.isSideNavigationVisible ? 0 : "-100%")}
  );
  width: 400px;
  height: 100vh;
  background-color: red;
`;

const SideNavigation = props => {
  return (
    <StyledSideNavigation
      isSideNavigationVisible={props.isSideNavigationVisible}
    >
      Haaaaj
    </StyledSideNavigation>
  );
};

function mapStateToProps(state) {
  const { isSideNavigationVisible } = state;
  return { isSideNavigationVisible };
}

export default connect(mapStateToProps)(SideNavigation);
