import React from 'react';

import PropTypes from 'prop-types';
const TimelineEntry = ({ time, title, detail }) => {
  return (
    <div className="timeline-entry">
      <div className="year">
        <h4>{time}</h4>
      </div>
      <div className="detail">
        <h4>{title}</h4>
        <p>{detail}</p>
      </div>
    </div>
  );
};

TimelineEntry.propTypes = {
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};
export default TimelineEntry;
