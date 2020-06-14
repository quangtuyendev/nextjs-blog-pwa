import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { renderBreadCrumbLinks, setBreadCrumbHeading } from '../../utils';

BreadCrumb.propTypes = {
  q: PropTypes.string,
  category: PropTypes.string,
};

BreadCrumb.defaultProps = {
  q: '',
  category: '',
};

function BreadCrumb({ q, category }) {
  return (
    <>
      <div
        className="page-title-area text-white bg-image bg-overlay ptb-60"
        style={{ backgroundImage: `url(/static/images/header/2.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-header-content">
                <div className="page-header-caption">
                  {setBreadCrumbHeading(category, q)}
                </div>
                <div className="breadcrumb-area">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/" as="/">
                        <a>Trang trủ</a>
                      </Link>
                    </li>
                    {renderBreadCrumbLinks(category, q)}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreadCrumb;
