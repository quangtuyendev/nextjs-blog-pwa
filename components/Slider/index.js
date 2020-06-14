import PropTypes from 'prop-types';
import React from 'react';
import CarouselProvider from '../../commons/CarouselProvider';
import { BASE_URL, HOME_SIDER_STATS } from '../../constants';
import { oneSidePerRowSettings } from '../../constants/carousel';
import { renderPosts } from '../../utils';
import SlideItem from './SlideItem';

Slider.propTypes = {
  articles: PropTypes.array,
};

Slider.defaultProps = {
  articles: [],
};

function Slider({ articles }) {
  const { start, end } = HOME_SIDER_STATS;
  return (
    <>
      <CarouselProvider
        settings={{
          ...oneSidePerRowSettings,
          arrows: false,
          customPaging: (i) => {
            return (
              <div>
                <span className="thumb">
                  <img
                    src={`${BASE_URL}/${
                      articles.slice(start, end)[i].Photo.url
                    }`}
                    alt={articles.slice(start, end)[i].Title}
                  />
                </span>
                <span className="text">
                  {articles.slice(start, end)[i].Title}
                </span>
              </div>
            );
          },
        }}
      >
        {renderPosts(articles.slice(start, end), SlideItem)}
      </CarouselProvider>
    </>
  );
}

export default Slider;
