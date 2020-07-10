import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <NavBar bg='primary' expand='sm' variant='dark' fixed='top' className='justify-content-between align-middle border border-dark'>
      <NavBar.Brand href="/" style={{ 'fontSize': '1.5em' }}>Waterfalls of Oregon!</NavBar.Brand>
      <Nav>
        <Nav.Item>
          <Link to='/waterfall/'>
            <Nav.Link style={{ 'transition': '.3s' }}>Create new waterfall</Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>       
    </NavBar>
  );
}
