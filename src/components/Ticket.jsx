import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const ticketInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <p><em>{props.issue}</em></p>
      <hr/>
        <style jsx>{`
              div {
                background-color: #d65900;
                width: 500px;
                margin-left: 35%;
              }
                div:hover {
                  background-color: #f2781b;
                }
              `} </style>
    </div>;
    if (props.currentRouterPath === '/admin'){
    return (
        <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
          {ticketInformation}
        </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default Ticket;
