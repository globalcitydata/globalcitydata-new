import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import withRoot from '../withRoot';

const NavLink = (props) => {
  const { to, children } = props;
  return (
    <Button component={Link} to={to} {...props}>
      {children}
    </Button>
  );
};

const styles = {
  root: {
    flexGrow: 0,
  },
  grow: {
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: '1.5rem',
    textTransform: 'none',
    textDecoration: 'none',
  },
  link: {
    fontSize: '1.3rem',
    textTransform: 'none',
  },
};

const ButtonAppBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" color="white">
      <Toolbar className={classes.toolbar}>
        <div className={classes.grow}>
          <NavLink to="/" className={classes.headerTitle}>
            Global City Data
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className={classes.link}>
            Home
          </NavLink>
          <NavLink to="/data" className={classes.link}>
            Data
          </NavLink>
          <NavLink to="/publications" className={classes.link}>
            Publications
          </NavLink>
          <NavLink to="/about/" className={classes.link}>
            About
          </NavLink>
          <NavLink to="/contact/" className={classes.link}>
            Contact
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(ButtonAppBar));
