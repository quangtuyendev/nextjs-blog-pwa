import PropTypes from 'prop-types';
import React from 'react';

MainWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

function MainWrapper({ children }) {
  return (
    <div className="main-wrapper ptb-80" style={{ transform: 'none' }}>
      <div className="container" style={{ transform: 'none' }}>
        <div className="row" style={{ transform: 'none' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainWrapper;
