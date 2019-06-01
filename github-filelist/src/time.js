import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <time className="time" datetime={time}>{timeString}</time>
  );
}

Time.propTypes = {
  time: PropTypes.string
};

export default Time;



