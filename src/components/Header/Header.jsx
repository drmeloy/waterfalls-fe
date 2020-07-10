import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <NavBar bg='primary' expand='sm' variant='dark' fixed='top' className='justify-content-between align-middle border border-dark'>
      <NavBar.Brand href="/" style={{ 'fontSize': '1.5em' }}>Waterfalls of Oregon!</NavBar.Brand>
      <Nav style={{ 'transition': '.3s' }}>
        <Link to='/waterfall/'>Create new waterfall</Link>
      </Nav>       
    </NavBar>
  );
}
