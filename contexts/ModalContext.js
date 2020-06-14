import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import * as types from '../actions/types';

const INITIAL_STATE = {
  isOpen: false,
  component: null,
};

export const ModalContext = React.createContext();

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
        component: action.payload,
      };
    case types.HIDE_MODAL:
      return {
        ...state,
        isOpen: false,
        component: null,
      };
    default:
      return state;
  }
}

ModalProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default function ModalProvider({ children }) {
  const [modal, modalDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ModalContext.Provider value={{ modal, modalDispatch }}>
      {children}
    </ModalContext.Provider>
  );
}
