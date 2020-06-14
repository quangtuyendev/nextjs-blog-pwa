import PropTypes from 'prop-types';
import React from 'react';
import ModalProvider from './ModalContext';

Provider.propTypes = {
  children: PropTypes.object.isRequired,
};

function Provider({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}
export default Provider;
