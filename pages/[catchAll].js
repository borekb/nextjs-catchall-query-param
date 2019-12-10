import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Product from './product';

const Home = ({ ctxAsPath }) => {
  const { query, asPath } = useRouter();
  query.id = asPath.substring(1);
  query.ctxAsPath = ctxAsPath;
  return <Product />;
};

// Opt out of static optimization
Home.getInitialProps = ctx => {
  console.log('asPath:', ctx.asPath);
  return { ctxAsPath: ctx.asPath };
};

export default Home;
