import React from 'react';
import UserImages from '../container/UserImages';
import { Link } from "react-router-dom";

import { Container } from 'reactstrap';
import Image from "react-graceful-image";

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { users } = this.props
    return (
      <Container fluid >
        {
          users.map(user =>
            <div key={user.id} style={container}>
              <div>
                <Link to={`/users/${user.id}`}>
                  <Image
                    src={user.profileImage}
                    width="50px"
                    height="50px"
                    alt=""
                    style={mainImg}
                  />
                </Link>{' '}
                <Link to={`/users/${user.id}`} style={font}>{user.username}</Link>
              </div><br /><br />

              <div>
                <UserImages user_id={user.id} />
              </div>

            </div>
          )
        }

      </Container>
    )
  }
}

const mainImg = {
  //borderRadius: '50'
  borderRadius: 50,
}

const container = {
  backgroundColor: '#F5F5DC',
  margin: 'auto',
  marginBottom: '20px',
  width: '50%',
  border: '3px solid grey',
  padding: '10px',
}

const font = {
  fontWeight: 'bold',
  color: '#696969'
}


