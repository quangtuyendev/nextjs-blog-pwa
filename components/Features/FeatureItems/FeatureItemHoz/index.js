import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import slugify from 'slugify';
import { BASE_URL } from '../../../../constants';
import { LocaleContext } from '../../../../contexts/LocaleContext';
import { renderDate } from '../../../../utils';

FeatureItemHoz.propTypes = {
  _id: PropTypes.string,
  Title: PropTypes.string,
  Photo: PropTypes.object,
  createdAt: PropTypes.string,
  article_topics: PropTypes.array,
};

FeatureItemHoz.defaultProps = {
  _id: '',
  Title: '',
  Photo: {},
  createdAt: '',
  article_topics: [],
};

function FeatureItemHoz({
  _id: id,
  Title: title,
  Photo: { url },
  createdAt,
  article_topics: articleTopics,
}) {
  const { locale } = useContext(LocaleContext);
  const { Topic } = articleTopics[0] || {};

  return (
    <div data-el={2} className="frontpage-featured-post">
      <article className="featured-item">
        <figure
          className="featured-media"
          style={{ backgroundImage: `url(${BASE_URL}/${url})` }}
        >
          <a href="/" className="featured-link">
            <img
              src={BASE_URL + url}
              alt={title}
              style={{ visibility: 'hidden' }}
            />
          </a>
        </figure>
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
  );
}

export default FeatureItemHoz;
