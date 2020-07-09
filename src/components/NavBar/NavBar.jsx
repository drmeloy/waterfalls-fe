import React from 'react';

export default function NavBar(){
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
      <a className="navbar-brand" href="/">Waterfalls of Oregon!</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/waterfalls/">Create new waterfall</a>
        </li>
      </ul>       
    </nav>
  );
}
