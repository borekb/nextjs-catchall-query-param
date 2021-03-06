import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <Head>
        <title>Catch-all query string demo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1>Demo</h1>
        <ul>
          <li><Link href='/product?id=abc' as='/abc'><a>Product abc</a></Link></li>
        </ul>
      </div>
    </div>
  );
};

// Opt out of static optimization
Index.getInitialProps = () => ({});

export default Index;
