import React from "react";
import Image from "react-graceful-image";
import UserImages from './container/UserImages';
import Loader from './img/giphy.gif';
import { Container, Row } from 'reactstrap';


export default class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        // console.log(this.props)
        return (
            <>{
                this.props.user
                    ?
                    <div style={container}>
                        <div>
                            <Image
                                src={this.props.user.profileImage}
                                style={userImg}
                            />{' '}
                            <span style={fontStyle}>{this.props.user.username}</span>{' '}
                            <button style={Btn}>Follow</button>
                        </div>
                        <div><br />
                            <p style={post}>Post</p>
                            <UserImages user_id={this.props.user.id} />
                        </div>
                    </div>
                    : <Container fluid className="h-100">
                        <Row className="h-100 justify-content-center align-items-center">
                            <img src={Loader} alt="" />
                        </Row>
                    </Container>
            }
            </>
        )
    }
}
const post = {
    textDecoration: 'overline',
    textAlign: 'center',
    fontFamily: 'Cute Font, cursive'
}

const Btn = {
    background: '#eb94d0',
    backgroundImage: '-webkit-linear-gradient(top, #eb94d0, #2079b0)',
    borderRadius: '28px'
}

const fontStyle = {
    fontWeight: 'bold',
    color: '#696969',

}

const userImg = {
    borderRadius: 50,
    width: '90px'
}

const container = {
    backgroundColor: '#F5F5DC',
    margin: 'auto',
    width: '50%',
    border: '3px solid grey',
    padding: '10px'
}