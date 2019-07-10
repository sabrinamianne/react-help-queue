import React from 'react';
import {Link} from 'react-router-dom';
import smiley from '../assets/img/smiley.png';

function Header(){
  return (
    <div>
      <style jsx> {`
        div {
          background-color: #d65900;
          margin-bottom: 2%;
        }
        h1 {
          text-align: center;
        }
        img {
          height: 100px;
          top:0;
          right:0;
          position: absolute;
        }
      `}
      </style>
      <style global jsx> {`
        a{
          color: black;
        }
      `}
      </style>
      <div className="header">
        <h1>Help Queue</h1>
        <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
        <img src={smiley}/>
      </div>
    </div>
  );
}

export default Header;
