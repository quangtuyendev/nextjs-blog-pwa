import React from 'react';

import { renderSocialList } from '../../utils';
import NewLetterForm from './Form';
import { SOCIAL_ICONS } from '../../constants';

function NewsLetter() {
  return (
    <div id="newsletter" className="newsltter-area bg-gray">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7 col-sm-6">
            <div className="social-profile">
              <ul className="social-share-two">
                {renderSocialList(SOCIAL_ICONS)}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-6">
            <div className="newsltter-content">
              <h3>Newsletter Subscribe</h3>
              <NewLetterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
