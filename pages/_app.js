import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "@store/configureStore";
import Head from "next/head";
import "antd/dist/antd.less";

class AppCon extends App {
  static async getInitialProps({ Component, _router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <meta name="robots" content="follow, index" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default withRedux(initStore)(AppCon);
