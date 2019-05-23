import React from 'react';
import './App.css';
import axios from 'axios';
import Home from './pages/Home';
import { Route, Link } from "react-router-dom";
import UserProfile from './UserProfile';
import NavigationBar from './container/NavigationBar';
import ProfilePage from './pages/ProfilePage'


//handle routes and props
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(`https://insta.nextacademy.com/api/v1/users`)
      .then((response) => {
        //handle success
        //console.log(response);
        this.setState({
          users: response.data
        })
      })
  }

  render() {
    const { users } = this.state
    //console.log('the ' + users)
    return (
      <>
        <Link to='/'><NavigationBar /></Link>
        <Route
          exact path='/'
          render={props => <Home {...props} users={users} />} />

        <Route
          exact path='/users/:id'
          render={props => (users.length) === 0 ? null : <UserProfile {...props} user={users.find(u => u.id === parseInt(props.match.params.id))} />} />

        <Route
          exact path='/profile'
          render={props => (users.length) === 0 ? null : <ProfilePage {...props} user={users} />} />
      </>
    )
  }
}



