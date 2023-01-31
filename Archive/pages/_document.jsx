import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='description'
          content='We help talented people find jobs they love, and help employers find the best talent to grow their businesses.'
        />
        <meta property='og:image' content='/favicon.jpg' />
        <meta
          property='og:description'
          content='We help talented people find jobs they love, and help employers find the best talent to grow their businesses.'
        />
        <meta
          property='og:title'
          content='Apex Recruiters - Connecting Organisations with Great Talents'
        />
        <meta
          name='twitter:title'
          content='Apex Recruiters - Connecting Organisations with Great Talents'
        />
        <link rel='icon' href='/favicon.jpg' />
      </Head>
      <body>
        <div id='myportal' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
