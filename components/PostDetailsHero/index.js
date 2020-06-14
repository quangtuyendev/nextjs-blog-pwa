import PropTypes from 'prop-types';
import React from 'react';
import { BASE_URL } from '../../constants';
import { renderDate } from '../../utils';

PostDetailsHero.propTypes = {
  Title: PropTypes.string,
  createdAt: PropTypes.string,
  Photo: PropTypes.object,
  article_topics: PropTypes.array,
};

PostDetailsHero.defaultProps = {
  Title: '',
  createdAt: '',
  Photo: {},
  article_topics: [],
};

function PostDetailsHero({
  Title: title,
  createdAt,
  article_topics: articleTopics,
  Photo: { url },
}) {
  const { Topic } = articleTopics[0] || {};

  return (
    <>
      <div className="single-post-thumbnail-area single-post-one">
        <div
          className="post-thumb bg-image bg-overlay"
          style={{ backgroundImage: `url(${BASE_URL + url})` }}
        />
        <div className="post-header single-post-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="content-entry-wrap">
                  <div className="featured-badge-list">
                    <a className="trending" href="/">
                      <span className="fab fa-gripfire" />
                    </a>
                    <a className="featured" href="/">
                      <span className="fa fa-bolt" />
                    </a>
                  </div>
                  <h3 className="entry-title" title={title}>
                    <a>{title}</a>
                  </h3>
                  <div className="entry-meta-content">
                    <div className="entry-meta-author">
                      <div className="entry-author-thumb">
                        <img
                          className="avatar photo"
                          src="/static/images/author/1.jpg"
                          alt="author"
                        />
                      </div>
                      <div className="entry-author-name">
                        <a href="/">Ahmed Arafa</a>
                      </div>
                    </div>
                    <div className="entry-date">
                      <span>{renderDate(new Date(createdAt).getTime())}</span>
                    </div>
                    <div className="entry-category">
                      <a className="cat" href="/">
                        {Topic}
                      </a>
                    </div>
                    <div className="entry-comment">
                      <span>60 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetailsHero;
