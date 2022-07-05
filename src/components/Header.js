import React, { useState, useEffect } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import HomeIcon from '@material-ui/icons/Home';
import Logo from '../assets/restaurant_24px.svg'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core//Box';
import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    textDecoration: 'none',
    color: 'rgb(221, 221, 221)',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titless: {
    margin: "15px",
  },
  Shope_mini: {
    fontSize: "22px",
    fontWeight: "100",
    position: "absolute",
    top: "18px",
    left: "80px"
  },
  logo: {
    width: '30px',
    color: '#fff'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: '100px',
};

const Header = (props) => {
  const [cartCount, setCartCount] = useState(0);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge color="secondary">
              <HomeIcon style={{ color: "black" }} />
            </Badge>
          </IconButton>
          <span>
            <img src={Logo} alt='logo' />
            Food's Restaurant
          </span>
        </MenuItem>
      </Link>
      <Button>Open modal</Button>
      <Link onClick={handleOpen} style={{ textDecoration: "none" }}>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={props.numberCart} color="secondary">
              <AddShoppingCartIcon style={{ color: "black" }} />
            </Badge>
          </IconButton>
          <p style={{ color: "black" }}>Cart</p>
        </MenuItem>
      </Link>
    </Menu>
  );


  return (
    <div className={classes.grow}>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div sx={style}>
            <Cart handleClose={handleClose} />
          </div>
        </Modal>
      </div>
      <AppBar position="fixed" >
        <Toolbar >
          <Typography className={classes.titless} variant="h4" noWrap>
            <Link className={classes.title} to="/">
              <img src={Logo} alt='logo' className={classes.logo} />
              <span className={classes.Shope_mini}>
                Food's Restaurant
              </span></Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show new notifications" color="inherit">

              <Link onClick={handleOpen} style={{ textDecoration: "none" }}>
                <Badge badgeContent={props.numberCart} color="secondary">
                  <AddShoppingCartIcon style={{ color: "rgb(221, 221, 221)" }} />
                </Badge>
              </Link>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numberCart: state._todoProduct.numberCart
  }
}
export default connect(mapStateToProps, null)(Header)
