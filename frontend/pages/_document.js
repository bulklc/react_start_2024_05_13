/* eslint-disable react/jsx-props-no-spreading */
import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = await renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-CA">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//     const sheet = new ServerStyleSheet();
//     const page = renderPage(
//       (App) => (props) => sheet.collectStyles(<App {...props} />)
//     );
//     const styleTags = sheet.getStyleElement();
//     console.log(page);
//     return { ...page, styleTags };
//   }

//   render() {
//     return (
//       <Html lang="en-CA">
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
