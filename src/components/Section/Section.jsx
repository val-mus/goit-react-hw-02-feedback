import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

class Section extends Component {
  render() {
    return (
      <section>
        <Container>
          <h2>{this.props.title}</h2>
          {this.props.children}
        </Container>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
