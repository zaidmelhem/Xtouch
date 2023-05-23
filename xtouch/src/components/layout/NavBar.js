import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Title from '../SharedComponents/Title';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/system';
import Paragraph from '../SharedComponents/Paragraph';

const MyNavbar = styled(AppBar)({
  backgroundColor: '#141414' ,
  position:"static",
});

const MyMenu = styled(Menu)({
  "& .MuiMenu-paper":{
    backgroundColor:'black',
    border: '1px solid white',
    width: '200px',
    height: '130px',
  }
});
const MyMenuItem = styled(MenuItem)({
  color:'white',
  paddingTop: '5px'
});

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <MyMenu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <Box pl={2}>
        <Paragraph paragraph={'Hello!'} size={'15px'}/>
        <Paragraph paragraph={'Access account and manage orders'} size={'10px'}/>
        </Box>
        <MyMenuItem onClick={handleMenuClose}>Sign Up / Log In</MyMenuItem>
        <MyMenuItem onClick={handleMenuClose}>My account</MyMenuItem>
      </MyMenu>
    );
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <MyNavbar >
          <Toolbar sx={{ml:{xl:15,md:8,xs:0} , mr:{xl:15,md:8,xs:0} }}>
            <Title title= {"X-touch"} variant={"h6"}/>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </MyNavbar>
        {renderMenu}
      </Box>
    );
}

export default NavBar