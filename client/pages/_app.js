import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import { AuthWrapper } from "../services/auth";
import "../services/firebase";
import { StoreWrapper } from "../services/store";
import "./_app.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function CustomApp({ Component, pageProps }) {
  return (
    <AuthWrapper>
      <StoreWrapper>
        <Component {...pageProps} />
      </StoreWrapper>
    </AuthWrapper>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default CustomApp;
