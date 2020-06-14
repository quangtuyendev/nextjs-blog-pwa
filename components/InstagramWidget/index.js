import _ from 'lodash';
import React from 'react';

function InstagramWidget() {
  const PHOTOS = [
    'http://tortoizthemes.com/magala-html/assets/images/widget/instagram/3/1.jpg',
    'http://tortoizthemes.com/magala-html/assets/images/widget/instagram/3/2.jpg',
    'http://tortoizthemes.com/magala-html/assets/images/widget/instagram/3/3.jpg',
    'http://tortoizthemes.com/magala-html/assets/images/widget/instagram/3/4.jpg',
    'http://tortoizthemes.com/magala-html/assets/images/widget/instagram/3/5.jpg',
    'http://tortoizthemes.com/magala-html/assets/images/widget/instagram/3/6.jpg',
    'http://tortoizthemes.com/magala-html/assets/images/widget/instagram/3/7.jpg',
    'http://tortoizthemes.com/magala-html/assets/images/widget/instagram/3/8.jpg',
  ];

  const renderPhotos = () =>
    _.map(PHOTOS, (photo) => (
      <li key={photo} className="feed-item">
        <a href="/">
          <img src={photo} alt="#" />
        </a>
      </li>
    ));

  return (
    <div className="instagram-widget-area style-two">
      <div className="widget bt-instafeed-widget">
        <ul id="instafeed">{renderPhotos()}</ul>
        <div className="instafeed-heading">
          <div className="heading">
            <h4>
              Follow Us <span>#magla</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramWidget;
