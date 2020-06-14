import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { hideModal } from '../../../actions';
import { ModalContext } from '../../../contexts/ModalContext';
import { renderPosts } from '../../../utils';
import useEscKeyDown from '../../../utils/useEscKeyDown';
import PostItem from './PostItem';

PostRecent.propTypes = {
  articles: PropTypes.array,
};

PostRecent.defaultProps = {
  articles: [],
};

function PostRecent({ articles }) {
  const { modalDispatch } = useContext(ModalContext);
  useEscKeyDown(() => {
    modalDispatch(hideModal());
  });

  return (
    <>
      <div
        className="magala-side-sidebar tse-scrollable"
        style={{ transform: 'none !important' }}
      >
        <div
          className="tse-scroll-content"
          style={{
            width: '350px',
            height: '887px',
            transform: 'none',
            paddingLeft: '16px',
          }}
        >
          <div className="tse-content" style={{ transform: 'none' }}>
            <span
              onClick={() => modalDispatch(hideModal())}
              className="sidebar-close-button"
            >
              <i className="fa fa-close" />
            </span>
            <div
              className="sidebar"
              style={{
                position: 'relative',
                overflowY: 'auto',
                height: '94vh',
              }}
            >
              <div
                className="theiaStickySidebar"
                style={{
                  paddingTop: '0px',
                  paddingBottom: '1px',
                  position: 'static',
                  transform: 'none',
                }}
              >
                <aside className="widget popular-posts-widget">
                  <h4 className="widget-title">
                    <span>Recent Post</span>
                  </h4>
                  <div className="widget-content">
                    {renderPosts(articles.slice(0, 10), PostItem)}
                  </div>
                </aside>
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
                        width: '360px',
                        height: '220px',
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
        </div>
      </div>
      <style jsx>
        {`
          .off-canves-opend .magala-close-all-window {
            bottom: 0;
            z-index: 99999;
            cursor: zoom-out;
          }

          .sidebar-close-button {
            position: absolute;
            top: 10px;
            left: 0;
            font-size: 22px;
            width: 40px;
            text-align: center;
            cursor: pointer;
          }

          .magala-side-sidebar .sidebar {
            direction: rtl;
          }

          .sidebar::-webkit-scrollbar-track {
            background-color: #dbdbdb;
            border-radius: 2rem;
          }

          .sidebar::-webkit-scrollbar {
            width: 4px;
            background-color: #dbdbdb;
            border-radius: 2rem;
          }

          .sidebar::-webkit-scrollbar-thumb {
            background-color: #d82e2a !important;
            border-radius: 2rem;
          }
        `}
      </style>
    </>
  );
}

export default PostRecent;
