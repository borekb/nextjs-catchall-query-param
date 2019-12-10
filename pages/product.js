import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Product = () => {
  const { query, asPath } = useRouter();

  return (
    <div>
      <Head>
        <title>Catch-all query string demo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1>Product {query.id}</h1>
        <ul>
          <li>query: {JSON.stringify(query)}</li>
          <li>asPath: {asPath}</li>
        </ul>
      </div>
    </div>
  );
};

// Opt out of static optimization
Product.getInitialProps = () => ({});

export default Product;
