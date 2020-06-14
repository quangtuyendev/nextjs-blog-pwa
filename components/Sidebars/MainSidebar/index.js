import PropTypes from 'prop-types';
import React from 'react';
import PostWidgetSlideList from '../../PostWidgetSlideList';
import Categories from './Categories';
import PostPopular from './PostPopular';
import Socials from './Socials';
import Subscribe from './Subscribe';

MainSidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
  articles: PropTypes.array,
};

MainSidebar.defaultProps = {
  articles: [],
};

function MainSidebar({ children, articles }) {
  return (
    <div className="col-lg-3" style={{ transform: 'none' }}>
      <div
        className="sidebar"
        style={{
          position: 'relative',
          overflow: 'visible',
          boxSizing: 'border-box',
          minHeight: '1px',
        }}
      >
        <div
          className="theiaStickySidebar"
          style={{
            paddingTop: '0px',
            paddingBottom: '1px',
            position: 'static',
            transform: 'none',
            top: '0px',
            left: '1022.5px',
          }}
        >
          <div className="sidebar-inner">
            <Socials />
            <Categories />
            <PostPopular articles={articles} />
            <Subscribe />
            <PostWidgetSlideList articles={articles} />
            {children}
          </div>
          <div
            className="resize-sensor"
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              right: '0px',
              bottom: '0px',
              overflow: 'hidden',
              zIndex: -1,
              visibility: 'hidden',
            }}
          >
            <div
              className="resize-sensor-expand"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                zIndex: -1,
                visibility: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '0px',
                  top: '0px',
                  transition: 'all 0s ease 0s',
                  width: '280px',
                  height: '1845px',
                }}
              />
            </div>
            <div
              className="resize-sensor-shrink"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                zIndex: -1,
                visibility: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transition: '0s',
                  width: '200%',
                  height: '200%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainSidebar;
