/** A Stripped version of unstated-next(https://github.com/jamiebuilds/unstated-next)! */
import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

const createContainer = (customHook) => {
  const Context = createContext(null);
  // Our custom hook name without the use keyword
  Context.displayName = customHook.name.slice(3);

  Provider.propTypes = {
    children: PropTypes.array.isRequired,
  };

  const Provider = ({ children }) => {
    const value = customHook();
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };
  const useContainer = () => useContext(Context);
  return {
    Provider,
    useContainer,
  };
};
export default createContainer;
