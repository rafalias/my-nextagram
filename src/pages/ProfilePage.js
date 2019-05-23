import React from 'react';
import Image from "react-graceful-image";
import ProfileImage from '../container/ProfileImage';
import Loader from '../img/giphy.gif';
import { Container, Row } from 'reactstrap';


export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        // console.log(this.props)
        if (this.props.user) {

            let user = JSON.parse(localStorage.getItem("current_user"))
            const pic = user.profile_picture
            const username = user.username
            return (
                <>{
                    <div style={container}>
                        <div>
                            <Image
                                src={`https://next-curriculum-instagram.s3.amazonaws.com/${pic}`}
                                style={profileImg} />{' '}
                            <span style={fontStyle}>{username}</span>
                        </div>
                        <div><br />
                            <p style={post}>Post</p>
                            <ProfileImage />
                        </div>
                    </div>
                }
                </>
            )
        }

        return (
            <>
                <Container fluid className="h-100">
                    <Row className="h-100 justify-content-center align-items-center">
                        <img src={Loader} alt="" />
                    </Row>
                </Container>
            </>
        )
    }
}



const fontStyle = {
    fontWeight: 'bold',
    color: '#696969'
}

const profileImg = {
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

const post = {
    textDecoration: 'overline',
    textAlign: 'center',
    fontFamily: 'Cute Font, cursive'
}