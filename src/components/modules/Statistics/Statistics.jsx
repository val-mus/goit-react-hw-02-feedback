import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul>
        <li>
          <p>{good}</p>
          <p>Good</p>
        </li>
        <li>
          <p>{neutral}</p>
          <p>Neutral</p>
        </li>
        <li>
          <p>{bad}</p>
          <p>Bad</p>
        </li>
        <li>
          <p>{total}</p>
          <p>Total</p>
        </li>
        <li>
          <p>{positivePercentage}%</p>
          <p>Positive Statistics</p>
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
