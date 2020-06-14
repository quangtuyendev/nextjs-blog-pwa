import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { LocaleContext } from '../../../contexts/LocaleContext';
import { renderLinks } from '../../../utils';

Menu.propTypes = {
  articleTopics: PropTypes.array,
};

Menu.defaultProps = {
  articleTopics: [],
};

function Menu({ articleTopics }) {
  const { locale } = useContext(LocaleContext);
  return <ul id="nav">{renderLinks(articleTopics, locale)}</ul>;
}

export default Menu;
