import _ from 'lodash';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { LocaleContext } from '../../../contexts/LocaleContext';

MenuMobile.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  articleTopics: PropTypes.array,
};

MenuMobile.defaultProps = {
  articleTopics: [],
};

function MenuMobile({ articleTopics, setShowMenu }) {
  const { locale } = useContext(LocaleContext);

  const renderLinks = () =>
    _.map([...articleTopics.slice(0, 5)], ({ Slug, Topic }) => (
      <li key={Topic}>
        <Link
          href="/[lang]/danh-muc/[category]"
          as={`/${locale}/danh-muc/${Slug}`}
        >
          <a onClick={() => setShowMenu(false)}>{Topic}</a>
        </Link>
      </li>
    ));

  return <ul id="nav">{renderLinks(articleTopics, locale)}</ul>;
}

export default MenuMobile;
