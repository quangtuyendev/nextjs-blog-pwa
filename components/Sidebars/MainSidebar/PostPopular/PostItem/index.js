import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import slugify from 'slugify';
import { BASE_URL } from '../../../../../constants';
import { LocaleContext } from '../../../../../contexts/LocaleContext';
import { renderDate } from '../../../../../utils';

PostItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  createdAt: PropTypes.string,
};

PostItem.defaultProps = {
  id: '',
  title: '',
  url: '',
  createdAt: '',
};

function PostItem({ id, title, url, createdAt }) {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <article className="post side-post">
        <div className="thumb-wrap">
          <Link
            href="/[lang]/post-details/[postTitle]/[postId]"
            as={`/${locale}/post-details/${slugify(title.toLowerCase())}/${id}`}
          >
            <a>
              <img src={BASE_URL + url} alt={title} title={title} />
            </a>
          </Link>
        </div>
        <div className="content-entry-wrap">
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

export default PostItem;
