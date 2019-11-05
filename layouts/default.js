import styled from "styled-components";
import SiteHeader from "../components/site-header";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500vh;
  padding-top: 200px;
`;

const DefaultLayout = props => {
  return (
    <div>
      <SiteHeader />
      <ContentWrapper>{props.children}</ContentWrapper>
    </div>
  );
};

export default DefaultLayout;
