import React from 'react';

function Footer(){
  return (
    <div>
      <style jsx> {`
        .footer {
          position: fixed;
          bottom:0;
          left:0;
          width: 100%;
          background-color:orange;
        }
        p {
          text-align: right;
          margin-right: 5%;
        }
        `}</style>
      <div className="footer">
        <p>Contact</p>
      </div>

    </div>
  );
}

export default Footer;
