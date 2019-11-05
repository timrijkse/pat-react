import App from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import styled from "styled-components";
import SiteHeader from "../components/site-header";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500vh;
  padding-top: 200px;
`;

class PattaApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <PersistGate
          loading={<Component {...pageProps} />}
          persistor={this.persistor}
        >
          <SiteHeader />
          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
        </PersistGate>
      </Provider>
    );
  }
}

export default withReduxStore(PattaApp);
