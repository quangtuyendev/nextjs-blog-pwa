import PropTypes from 'prop-types';
import React from 'react';
import FeatureItemHoz from '../../components/Features/FeatureItems/FeatureItemHoz';
import FeatureItemSquare from '../../components/Features/FeatureItems/FeatureItemSquare';
import FeatureList from '../../components/Features/FeatureList';
import { renderPosts } from '../../utils';
import FeatureItem from '../Features/FeatureItems/FeatureItem';

FeatureWrapper.propTypes = {
  articles: PropTypes.array,
};

FeatureWrapper.defaultProps = {
  articles: [],
};

function FeatureWrapper({ articles }) {
  const [firstPost, secondPost] = articles;
  return (
    <>
      <div className="frontpage-featured-posts featured-style-one ptb-80">
        <div className="container">
          <div className="row">
            <div className="frontpage-featured-posts-content">
              <div className="ffp-inner-wrap-50">
                <FeatureItemSquare {...firstPost} />
              </div>
              <div className="ffp-inner-wrap-50">
                <FeatureItemHoz {...secondPost} />
                <FeatureList>
                  {renderPosts(articles.slice(2, 4), FeatureItem)}
                </FeatureList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureWrapper;
