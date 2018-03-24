import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        {/* <Link to='/register'>
          <Menu.Item name='Register' />
        </Link> */}
        <Link to='/login'>
          <Menu.Item name='Admin Login' />
        </Link>

      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='Home' />
          </Link>
          <Link to='/Menu'>
            <Menu.Item name='Menu' />
          </Link>
          <Link to='./Cart'>
            <Menu.Item name='My Cart' />
          </Link>
          <Link to='/About'>
            <Menu.Item name='About' />
          </Link>
          <Link to='/Orders'>
            <Menu.Item name='Orders' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
