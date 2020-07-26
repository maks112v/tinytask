import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png?v=PYqoAdanOv"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png?v=PYqoAdanOv"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png?v=PYqoAdanOv"
          />
          <link rel="manifest" href="/favicons/site.webmanifest?v=PYqoAdanOv" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg?v=PYqoAdanOv"
            color="#5264cc"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico?v=PYqoAdanOv" />
          <meta name="msapplication-TileColor" content="#5264cc" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml?v=PYqoAdanOv"
          />
          <meta name="theme-color" content="#fcfcff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
