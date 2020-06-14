import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import slugify from 'slugify';
import { BASE_URL } from '../../constants';
import { LocaleContext } from '../../contexts/LocaleContext';
import { renderDate } from '../../utils';

PostWidgetSlideItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  createdAt: PropTypes.string,
};

PostWidgetSlideItem.defaultProps = {
  id: '',
  title: '',
  url: '',
  createdAt: '',
};

function PostWidgetSlideItem({ id, title, url, createdAt }) {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <article className="post hentry post-grid style-five">
        <div className="entry-thumb">
          <figure
            className="thumb-wrap"
            style={{ backgroundImage: `url(${BASE_URL + url})` }}
          >
            <Link
              href="/[lang]/post-details/[postTitle]/[postId]"
              as={`/${locale}/post-details/${slugify(
                title.toLowerCase(),
              )}/${id}`}
            >
              <a>
                <img
                  src={BASE_URL + url}
                  alt={title}
                  style={{ visibility: 'hidden' }}
                />
              </a>
            </Link>
          </figure>
        </div>
        <div className="content-entry-wrap">
          <div className="featured-badge-list">
            <a className="featured" href="/">
              <span className="fa fa-bolt" />
            </a>
          </div>
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
          </div>
        </div>
      </article>
    </>
  );
}

export default PostWidgetSlideItem;
