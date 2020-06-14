import _ from 'lodash';
import Link from 'next/link';
import React from 'react';
import { POST_CATS } from '../../../../constants';

function Categories() {
  const renderCats = () =>
    _.map(POST_CATS, (cat, index) => (
      <Link key={cat} href="/" as="/">
        <a className="cat-item">
          <div className="cat-item-inner">
            <div className="cat-thumb">
              <img
                src={`/static/images/widget/cat/${index + 1}.jpg`}
                alt={cat}
              />
            </div>
            <div className="cat-name">
              <span>{cat}</span>
            </div>
          </div>
        </a>
      </Link>
    ));

  return (
    <>
      <aside className="widget bt-widget-categories">
        <div className="widget-content">{renderCats()}</div>
      </aside>
    </>
  );
}

export default Categories;
