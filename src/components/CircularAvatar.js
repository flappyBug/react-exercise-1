import React from 'react';
import PropTypes from 'prop-types';

const CircularAvatar = ({ src }) => (
  <img src={src} className="avatar" alt="avatar"></img>
);

CircularAvatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CircularAvatar;
