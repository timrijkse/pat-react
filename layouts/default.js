import styled from "styled-components";
import SiteHeader from "../components/site-header";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500vh;
  padding-top: 200px;
`;

export default ({ children }) => (
  <div>
    <SiteHeader />

    <ContentWrapper>{children}</ContentWrapper>

    <style jsx global>{`
      :root {
        font-size: 62.5%;
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
        margin: 0;
      }

      html,
      body {
        min-height: 100%;
        background: #fff;
      }
    `}</style>
  </div>
);
