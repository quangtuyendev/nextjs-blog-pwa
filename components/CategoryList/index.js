import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { LocaleContext } from '../../contexts/LocaleContext';
import { renderCats } from '../../utils';

CategoryList.propTypes = {
  articleTopics: PropTypes.array,
};

CategoryList.defaultProps = {
  articleTopics: [],
};

function CategoryList({ articleTopics }) {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <div className="widget-content">
        <ul>{renderCats(articleTopics, locale)}</ul>
      </div>
    </>
  );
}

export default CategoryList;
