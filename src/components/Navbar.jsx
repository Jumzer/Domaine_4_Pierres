import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        DOMAINE 4 PIERRES
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/">Le domaine</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/vins">Nos vins</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/partenaires">Les partenaires</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/galerie">Galerie</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/contact">Contact</Link></MenuItem>
      </Menu>
    </div>
  );
}
