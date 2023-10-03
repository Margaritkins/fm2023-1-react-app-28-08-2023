import React from 'react';
import NavMenu from '../NavMenu';
import Avatar from '../Avatar';

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
      <NavMenu />
      <Avatar />
    </div>
  );
};

export default Header;
