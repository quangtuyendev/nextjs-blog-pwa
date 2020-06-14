import React from 'react';
import { SOCIAL_ICONS } from '../../constants';
import { renderSocialList } from '../../utils';

function ActionBar() {
  return (
    <>
      <div className="header-top-navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="top-navbar-left">
                <ul className="info">
                  <li className="info-date">Saturday, 20 April 2020</li>
                  <li className="temperature">
                    <img src="/static/images/icon/cloud.png" alt="icon" />
                    Dubai 37 °C
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="top-navbar-right">
                <div className="social-profile">
                  <ul className="social-share-two">
                    {renderSocialList([
                      ...SOCIAL_ICONS.slice(0, 3),
                      ...SOCIAL_ICONS.slice(4),
                    ])}
                  </ul>
                  {/* <LocaleSwitcher /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionBar;
