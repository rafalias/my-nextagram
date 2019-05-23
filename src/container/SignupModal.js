import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import LoginModal from './LoginModal';
import axios from 'axios';
import * as EmailValidator from 'email-validator';
import { withRouter } from 'react-router-dom';

class SignupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    handleName = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmail = e => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (EmailValidator.validate(this.state.email)) {
            axios({
                method: 'post',
                url: 'https://insta.nextacademy.com/api/v1/users',
                header: { "Content-Type": "application/json" },
                data: {
                    username: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                }
            })
                .then((response) => {
                    let user = JSON.stringify(response.data.user)
                    localStorage.setItem('JWT', response.data.auth_token);
                    localStorage.setItem('current_user', user);
                    this.props.toggleSignupModal()
                    this.props.history.push(`/user/${JSON.parse(localStorage.current_user).id}`)
                })
        }
    }

    render = () => {
        const { open, toggleSignupModal, toggleLoginModal } = this.props
        return (
            <div>

                <Modal isOpen={open} toggle={toggleSignupModal} style={loginStyle}>
                    <ModalHeader toggle={toggleSignupModal}>Signup</ModalHeader>
                    <ModalBody>
                        <form on Submit={this.handleSubmit}>
                            <label className="grey-text">
                                Your Name
                        </label>
                            <input
                                type="name"
                                className="form-control"
                                onChange={this.handleName}
                                value={this.state.name}
                            />
                            <br />
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
                                value={this.state.password}
                            />

                            <br />
                            <input type='submit' value='submit' />{' '}
                            <input type='submit' onClick={toggleSignupModal} value='cancel' />
                        </form>
                        <br />
                        <p>Already a member. <Button onClick={toggleLoginModal}>{this.props.buttonLabel} Login</Button> here</p>

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

export default withRouter(SignupModal);
