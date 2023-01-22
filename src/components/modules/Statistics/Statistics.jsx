import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.number}>{good}</p>
          <p className={styles.text}>Good</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number}>{neutral}</p>
          <p className={styles.text}>Neutral</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number}>{bad}</p>
          <p className={styles.text}>Bad</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number}>{total}</p>
          <p className={styles.text}>Total</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number}>{positivePercentage}%</p>
          <p className={styles.text}>Positive Statistics</p>
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
