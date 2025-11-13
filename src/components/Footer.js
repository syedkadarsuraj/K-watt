import React from 'react';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <p><font color="black">© {new Date().getFullYear()} K-watt Electric. All Rights Reserved.</font></p>
      </div>
    </footer>
  );
}
