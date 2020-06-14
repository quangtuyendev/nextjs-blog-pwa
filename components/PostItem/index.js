import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import LazyLoad from 'react-lazyload';
import slugify from 'slugify';
import { BASE_URL } from '../../constants';
import { LocaleContext } from '../../contexts/LocaleContext';
import { renderDate } from '../../utils';

PostIem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  createdAt: PropTypes.string,
  articleTopics: PropTypes.array,
};

PostIem.defaultProps = {
  id: '',
  title: '',
  url: '',
  createdAt: '',
  articleTopics: [],
};

function PostIem({ id, title, url, createdAt, articleTopics }) {
  const { locale } = useContext(LocaleContext);
  const { Topic } = articleTopics[0] || {};
  return (
    <>
      <LazyLoad offset={[-100, 200]} throttle={300} height={50}>
        <div className="col-lg-4 col-md-6">
          <article className="post hentry post-list post-list-small">
            <div className="entry-thumb">
              <figure className="thumb-wrap">
                <Link
                  href="/[lang]/post-details/[postTitle]/[postId]"
                  as={`/${locale}/post-details/${slugify(
                    title.toLowerCase(),
                  )}/${id}`}
                >
                  <a title={title}>
                    <img src={BASE_URL + url} alt={title} />
                  </a>
                </Link>
                <div className="featured-badge-list">
                  <a className="featured" href="/">
                    <span className="fa fa-bolt" />
                  </a>
                </div>
              </figure>
            </div>
            <div className="content-entry-wrap">
              <div className="entry-content">
                <h3 className="entry-title" title={title}>
                  <Link
                    href="/[lang]/post-details/[postTitle]/[postId]"
                    as={`/${locale}/post-details/${slugify(
                      title.toLowerCase(),
                    )}/${id}`}
                  >
                    <a>{title}</a>
                  </Link>
                </h3>
              </div>
              <div className="entry-meta-content">
                <div className="entry-date">
                  <span>{renderDate(new Date(createdAt).getTime())}</span>
                </div>
                <div className="entry-category">
                  <a className="cat" href="/">
                    {Topic}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </LazyLoad>
    </>
  );
}

export default PostIem;
