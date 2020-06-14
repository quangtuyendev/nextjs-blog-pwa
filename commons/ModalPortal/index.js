import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { hideModal } from '../../actions';
import { ModalContext } from '../../contexts/ModalContext';

const bodyTag = document.querySelector('body');
function ModalPortal() {
  const {
    modal: { isOpen, component },
    modalDispatch,
  } = useContext(ModalContext);
  let elm = document.createElement('div');
  elm.setAttribute('id', 'modal-root');

  useEffect(() => {
    bodyTag.insertBefore(elm, bodyTag.childNodes[0]);
    return () => {
      bodyTag.removeChild(elm);
    };
  }, [elm]);

  return (
    elm &&
    ReactDOM.createPortal(
      isOpen ? (
        <>
          {component}
          <div
            onClick={() => modalDispatch(hideModal())}
            className="magala-close-all-window"
          />
        </>
      ) : null,
      elm,
    )
  );
}

export default ModalPortal;
