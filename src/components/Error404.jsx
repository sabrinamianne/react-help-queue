import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import sorry from '../assets/img/sorry.jpg';

function Error404(props) {
  return (
    <div>
      <img src={sorry}></img>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">Home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes= {
  location: PropTypes.object
};

export default Error404;
