import _ from 'lodash';
import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';
import CountQuanTity from '../components/CountQuanTity';

export const renderPosts = (posts, PostItem) =>
  _.map(
    posts,
    ({
      _id,
      Title,
      Photo: { url },
      createdAt,
      Teaser: teaser,
      article_topics: articleTopics,
    }) => (
      <PostItem
        key={_id}
        id={_id}
        title={Title}
        url={url}
        createdAt={createdAt}
        teaser={teaser}
        articleTopics={articleTopics}
      />
    ),
  );

export const renderDate = (value) => {
  const now = new Date().getTime();
  const oneMonthValue = 2629800000; // a month to milliseconds
  if (now >= value + oneMonthValue) {
    return <Moment format="ll">{value}</Moment>;
  }
  return <Moment fromNow>{value}</Moment>;
};

export const renderSocialList = (socialList) =>
  _.map(socialList, ({ path, iconType }) => (
    <li key={iconType}>
      <a href={path}>
        <i className={iconType} />
      </a>
    </li>
  ));

export const renderLinks = (links, lang) =>
  _.map([...links.slice(0, 5)], ({ Slug, Topic }) => (
    <li key={Topic}>
      <Link href="/[lang]/danh-muc/[category]" as={`/${lang}/danh-muc/${Slug}`}>
        <a>{Topic}</a>
      </Link>
    </li>
  ));

export const renderFooterLinks = (links) =>
  _.map(links, ({ path, name }) => (
    <li key={name}>
      <Link href={path}>{name}</Link>
    </li>
  ));

export const setUi = (pathname) => {
  switch (pathname) {
    case '/':
    case '/blog':
      return {
        className: 'header-style-one',
        logo: 'logo',
        isShowComponent: false,
      };
    default:
      return {
        className: 'header-style-two',
        logo: 'logo-black',
        isShowComponent: true,
      };
  }
};

export const setBreadCrumbHeading = (category, search) => {
  if (category) {
    return <h1>Danh mục bài viết</h1>;
  } else if (search) {
    const searchValue = search.split('=').pop();
    return (
      <h1>
        Search result for:
        <span>{` ${searchValue}`}</span>
      </h1>
    );
  }
};

export const renderBreadCrumbLinks = (category, search) => {
  if (category) {
    return (
      <>
        <li aria-current="page" className="breadcrumb-item active">
          {_.startCase(category)}
        </li>
      </>
    );
  } else if (search) {
    return (
      <li aria-current="page" className="breadcrumb-item active">
        Tìm kiếm
      </li>
    );
  }
};

export const filterBy = (category, search) => {
  if (category) {
    return { Slug: category };
  } else if (search) {
    return { Title: search };
  }
};

export const renderCats = (articleTopics, locale) =>
  _.map(articleTopics.slice(0, 5), ({ Topic, Slug }) => (
    <li key={Topic} className="cat-item">
      <Link
        href="/[lang]/danh-muc/[category]"
        as={`/${locale}/danh-muc/${Slug}`}
      >
        <a>
          {Topic}
          <span className="count">
            <CountQuanTity Topic={Topic} />
          </span>
        </a>
      </Link>
    </li>
  ));
