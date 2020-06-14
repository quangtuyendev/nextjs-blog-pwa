import PropTypes from 'prop-types';
import React from 'react';
import CarouselProvider from '../../commons/CarouselProvider';
import { oneSidePerRowSettings } from '../../constants/carousel';
import { renderPosts } from '../../utils';
import PostWidgetSlideItem from '../PostWidgetSlideItem';

PostWidgetSlideList.propTypes = {
  articles: PropTypes.array,
};

PostWidgetSlideList.defaultProps = {
  articles: [],
};

function PostWidgetSlideList({ articles }) {
  return (
    <aside className="widget tb-posts-slide-widget">
      <div className="widget-content">
        <div id="post-widget-carousel">
          <CarouselProvider
            settings={{ ...oneSidePerRowSettings, dots: false }}
          >
            {renderPosts(articles.slice(0, 3), PostWidgetSlideItem)}
          </CarouselProvider>
        </div>
      </div>
    </aside>
  );
}

export default PostWidgetSlideList;
