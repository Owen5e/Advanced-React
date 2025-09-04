import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        {/* <head /> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
