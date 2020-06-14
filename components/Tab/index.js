import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { TABS } from '../../constants';

Tab.propTypes = {
  currentTab: PropTypes.number.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

function Tab({ currentTab, setCurrentTab }) {
  const renderTabs = () =>
    _.map(TABS, ({ name, iconType }, index) => (
      <li key={name}>
        <span
          onClick={() => setCurrentTab(index)}
          className={classnames({ active: currentTab === index })}
        >
          <i className={iconType} />
          {name}
        </span>
      </li>
    ));

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="section-header">
          <h2 className="section-title">Top Stories</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="filter-tab-area">
          <ul className="nav nav-tabs" role="tablist">
            {renderTabs()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tab;
