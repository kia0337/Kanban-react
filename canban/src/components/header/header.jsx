import React from 'react';
import Account from './profile/profile';
import './header.css';

function Header () {
  return (
      <header className = 'header'>
        <h1 className = 'header__title'>Kanban Board</h1>
        <Account />
      </header>
  )
}

export default Header;