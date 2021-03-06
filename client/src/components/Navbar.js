import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Grid, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import NavSearch from './nav/NavSearch';

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if(user && user.admin) {
      return (
          <Menu.Menu position='right'>

            <Link to="/admin-courses">
              <Menu.Item>
              Courses
              </Menu.Item>
            </Link>

          <Link to="/admin-users">
            <Menu.Item>
              Users
            </Menu.Item>
          </Link>

            <Menu.Item
              name='logout'
              onClick={ () => handleLogout(this.props.history) }
            />
          </Menu.Menu>
      )
    }

    else if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } 
    else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <div style={{ padding: '30px 16px 50px 16px'}}>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
            <NavSearch />
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);