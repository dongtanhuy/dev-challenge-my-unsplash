import React from 'react';
import logo from '../../assets/img/my_unsplash_logo.svg';
import { Button } from '../../components';

import './Header.scss';
interface Props {

}

const Header: React.FC<Props> = () => {
  return (
    <div className="Header">
      <div className="Header__rightHandSide">
        <img src={logo} alt="logo" />
        <div className="SearchBar">
          <i className="material-icons">search</i>
          <input type="text" className="SearchBar__searchInput" placeholder="Search by name" />
        </div>
      </div>
      <Button text="Add a photo" onClick={() => console.log('click')} />
    </div>
  )
}

export default Header;