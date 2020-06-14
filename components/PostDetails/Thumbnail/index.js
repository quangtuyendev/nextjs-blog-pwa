import PropTypes from 'prop-types';
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import { BASE_URL } from '../../../constants';

Thumbnail.propTypes = {
  Photo: PropTypes.object,
};

Thumbnail.defaultProps = {
  Photo: {},
};

function Thumbnail({ Photo: { url } }) {
  return (
    <figure className="thumb text-center">
      <Zoom width="100%">
        <img style={{ width: '100%' }} src={BASE_URL + url} alt="Img" />
      </Zoom>
    </figure>
  );
}

export default Thumbnail;
