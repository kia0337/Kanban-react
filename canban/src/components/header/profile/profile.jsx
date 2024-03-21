import React, { useState } from 'react';
import './profile.css';
import avatar from './avatar.svg';
import arrow from './arrow.svg';

function Profile() {
  const [state, setState] = useState(true);

  return (
    <>
    <div className = 'profile'>
        <button
            className = 'profile__btn'
            onClick = {() => {setState(!state)}}>
            <img
            className = 'profile__img'
            src = { avatar }
            />
        </button>
        <div
            className = {state ? '_profile_arrow' : 'profile__arrow active'}
            onClick = {() => {setState(!state)}}>
        </div>
    </div>
    <nav className = {state ? 'dropdown' : 'dropdown active'}>
        <ul className = 'dropdown__list'>
            <li>
                <a className = 'dropdown__li' 
                onFocus = {() => {setState(!state)}} 
                href="/">
                Profile
                </a>
            </li>
            <li>
                <a className = 'dropdown__li' 
                onFocus = {() => {setState(!state)}} 
                href="/">
                Log Out
                </a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Profile;