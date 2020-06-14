import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PostItem from '../PostItem';
import PostItemGrid from '../PostItemGrid';
import PostList from '../PostList';
import Tab from '../Tab';

Story.propTypes = {
  articles: PropTypes.array,
};

Story.defaultProps = {
  articles: [],
};

function Story({ articles }) {
  const POST_STATS = [
    {
      perPage: 3,
      component: PostItemGrid,
    },
    {
      perPage: 9,
      component: PostItem,
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  const renderPosts = (articles, currentTab) =>
    _.map(POST_STATS, ({ perPage, component }) => (
      <PostList
        key={perPage}
        perPage={perPage}
        component={component}
        currentTab={currentTab}
        articles={articles}
      />
    ));

  return (
    <div className="top-stories-block top-stories-one bg-gray ptb-80">
      <div className="container">
        <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div className="row">
          <div className="col-12">
            <div className="tab-content filter-tab-content">
              <div
                className="tab-pane fade active show"
                id="blog_trending"
                role="tabpanel"
              >
                <div className="row">{renderPosts(articles, currentTab)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
