import Head from 'next/head';
import React, { useEffect } from 'react';
import { getInitialLocale } from '../translations/getInitialLocale';

function Index() {
  useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
}
export default Index;
