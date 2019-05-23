import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import SignupModal from './SignupModal';
import * as EmailValidator from 'email-validator';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmail = (e) => {
        //console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        //console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        //console.log('asd')
        if (EmailValidator.validate(this.state.email)) {
            //console.log('asd')
            axios({
                method: 'post',
                url: 'https://insta.nextacademy.com/api/v1/login',
                header: { "Content-Type": "application/json" },
                data: {
                    email: this.state.email,
                    password: this.state.password
                }
            })
                .then((response) => {
                    // console.log(response);
                    let user = JSON.stringify(response.data.user)
                    localStorage.setItem('JWT', response.data.auth_token);
                    localStorage.setItem('current_user', user);
                    this.props.toggleLoginModal();
                    this.props.history.push(`/profile`)
                })
                .catch(error => {
                    console.log('ERROR', error)
                })
        }
    }

    render = () => {
        const { open, toggleSignupModal, toggleLoginModal } = this.props
        //console.log(this.state.email)
        //console.log(EmailValidator.validate(this.state.email))
        return (
            <div>
                <Modal isOpen={open} toggle={toggleLoginModal} style={loginStyle}>
                    <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            <label className="grey-text">
                                Your email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={this.handleEmail}
                                value={this.state.email}
                            />
                            <br />
                            <label className="grey-text">
                                Your Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={this.handlePassword}
                            /><br />
                            <input type='submit' value='submit' />{' '}
                            <input type='submit' value='cancel' onClick={toggleLoginModal} />
                        </form>
                        <br />
                        <p>Not a member yet. <Button onClick={toggleSignupModal}>{this.props.buttonLabel} SignUp</Button> here</p>

                    </ModalBody>
                </Modal>

            </div>

        );
    }
}

const loginStyle = {
    backgroundColor: '#ffffff',
    opacity: 0.9

}

export default withRouter(LoginModal);