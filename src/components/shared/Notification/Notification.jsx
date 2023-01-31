import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

class Notification extends Component {
  render() {
    const { msg, children } = this.props;
    return (
      <section>
        <Container>
          <h3>{msg}</h3>
        </Container>
      </section> 
    );
  }
}

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Notification;
