import Head from 'next/head';
import React from 'react';

function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="This project using nextjs + PWA" />
      <meta
        name="og:description"
        property="og:description"
        content="This project using nextjs + PWA"
      />
      <meta property="og:site_name" content="Blog" />
      <meta property="og:image" content="og:image" />

      <link rel="manifest" href="manifest.json" />
      <link
        href="/static/images/icon/web-icon.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="shortcut icon" href="/static/images/icon/web-icon.png" />
      <meta name="theme-color" content="#3367D6" />
      <link rel="apple-touch-icon" href="/static/images/icon/web-icon.png" />
    </Head>
  );
}

export default Meta;
