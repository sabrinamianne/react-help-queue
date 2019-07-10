import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #d65900;
            width: 500px;
            margin-left: 35%;
          }
            div:hover {
              background-color: #f2781b;
            }
          `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
