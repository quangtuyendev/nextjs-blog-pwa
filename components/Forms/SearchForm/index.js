import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import slugify from 'slugify';

SearchForm.propTypes = {
  formRef: PropTypes.object,
};

SearchForm.defaultProps = {
  formRef: {},
};

function SearchForm({ formRef }) {
  const history = useHistory();
  const initialSearch = sessionStorage.search || '';
  const [search, setSearch] = useState(initialSearch);

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem('search', search);
    history.push(`/search?q=${slugify(search)}`);
  };

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('search');
    };
  }, []);

  return (
    <div ref={formRef} className="search-form" style={{ display: 'inline' }}>
      <form action="/search" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="q"
          type="search"
          placeholder="Tìm kiếm"
          value={search}
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
