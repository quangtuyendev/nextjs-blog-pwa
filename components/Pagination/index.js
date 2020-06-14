import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

Pagination.propTypes = {
  totalPagas: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleSetCurrentPage: PropTypes.func.isRequired,
};

function Pagination({ totalPagas, currentPage, handleSetCurrentPage }) {
  const renderPaginations = () => {
    const paginations = [];
    for (let i = 0; i < totalPagas; i++) {
      paginations.push(
        <li
          key={i}
          className={classnames({
            active: currentPage === i,
          })}
        >
          <button
            type="button"
            onClick={() => handleSetCurrentPage(i)}
            className="page-numbers"
          >
            {i + 1}
          </button>
        </li>,
      );
    }
    return paginations;
  };

  return (
    <nav className="navigation paging-navigation pagination-center">
      <ul className="nav-links">
        <li
          className={classnames('nav-previous', {
            disabled: currentPage === 0,
          })}
        >
          <button
            type="button"
            onClick={() => handleSetCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {renderPaginations()}
        <li
          className={classnames('nav-next', {
            disabled: currentPage === totalPagas - 1,
          })}
        >
          <button
            type="button"
            onClick={() => handleSetCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
