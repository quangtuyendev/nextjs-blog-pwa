import React from 'react';
import { FOOTER_LINKS } from '../../constants';
import { renderFooterLinks } from '../../utils';

function FooterBottom() {
  return (
    <div className="footer-bottom-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="copyright-text">
              <p>© Copyright 2019 Magala. All Rights Reserved</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="footer-menu">
              <ul className="list">{renderFooterLinks(FOOTER_LINKS)}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
