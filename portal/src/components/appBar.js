import React from 'react';
import AppBar from 'material-ui/AppBar';
import history from '../config/history';
import logout from '../images/logout.png';
import FlatButton from 'material-ui/FlatButton';
import Button from '@material-ui/core/Button';

// import IconButton from 'material-ui/IconButton';
// import ActionLogout from 'material-ui/svg-icons/action/logout';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
function logoutHandler() {
  history.push('/');
}

const AppBarExampleIcon = props => (
  <AppBar
    title={
      <div style={{ width: 'fit-content', margin: 'auto' }}>
        Timber Supplychain
      </div>
    }
    iconElementLeft={<p style={{ color: 'white' }}>{props.obj.name}</p>}
    iconElementRight={
      <div>
        <p style={{ color: 'white', display: 'inline-block' }}>
          Company: {props.obj.company}
        </p>
        <span onClick={logoutHandler} style={{marginLeft: '25px', marginRight: '25px'}}>
            <Button variant="contained" color="secondary">Logout</Button>
        </span>
      </div>
    }
  />
);

export default AppBarExampleIcon;
