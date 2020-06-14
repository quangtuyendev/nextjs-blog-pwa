import React from 'react';
import PropTypes from 'prop-types';

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};

function SampleNextArrow({ onClick }) {
  return (
    <div onClick={onClick} className="owl-next">
      <i className="fa fa-angle-right" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div onClick={onClick} className="owl-prev">
      <i className="fa fa-angle-left" />
    </div>
  );
}

export const oneSidePerRowSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 6000000000,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
