import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

CarouselProvider.propTypes = {
  children: PropTypes.array.isRequired,
  settings: PropTypes.object,
};

CarouselProvider.defaultProps = {
  settings: {},
};

export default function CarouselProvider({ children, settings }) {
  return <Slider {...settings}>{children}</Slider>;
}
