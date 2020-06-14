import _ from 'lodash';
import React from 'react';
import { SOCIAL_STATS } from '../../../../constants';

function Socials() {
  const renderSocials = () =>
    _.map(SOCIAL_STATS, ({ className, iconType, count, mediaType }) => (
      <div key={className} className="bt-socail-profile">
        <a className={`${className} icon`} href="/" target="_blank">
          <span className="social-icon">
            <i className={iconType} />
          </span>
          <span className="bt-count">{count}</span>
          <span className="bt-media-type">{mediaType}</span>
        </a>
      </div>
    ));

  return (
    <>
      <aside className="widget bt-socail-widget">
        <div className="widget-content">{renderSocials()}</div>
      </aside>
    </>
  );
}

export default Socials;
