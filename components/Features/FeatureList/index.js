import PropTypes from 'prop-types';

FeatureList.propTypes = {
  children: PropTypes.array.isRequired,
};

function FeatureList({ children }) {
  return children;
}

export default FeatureList;
