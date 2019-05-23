import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { Button } from 'reactstrap';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loginModal: false,
            signupModal: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleLoginModal = () => {
        this.setState(prevState => ({
            signupModal: false,
            loginModal: !prevState.loginModal

        }));
    }

    toggleSignupModal = () => {
        this.setState(prevState => ({
            loginModal: false,
            signupModal: !prevState.signupModal

        }));
    }

    handleLogout = () => {
        localStorage.removeItem('JWT');
        localStorage.removeItem('current_user');
        this.forceUpdate()
    }
    render() {
        // console.log('login state ' + this.state.LoginModal)
        // console.log('toggleLoginModal ' + this.toggleLoginModal)
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div style={navbarCenter}>
                        <img src="https://longfordpc.com/images/moustache-clipart-hipster-4.png" alt="" width='60' height='60' style={logo} />
                        <NavbarBrand href="/" style={font}>Nextagram</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button style={modalStyle} onClick={this.toggleLoginModal}>{this.props.buttonLabel}Login</Button>
                                </NavItem>
                                <NavItem>
                                    <Button style={modalStyle} onClick={this.toggleSignupModal}>{this.props.buttonLabel}Signup</Button>
                                </NavItem>
                                <NavItem>
                                    <Button style={modalStyle} onClick={this.handleLogout}>{this.props.buttonLabel}Signout</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar><br /><br />
                <LoginModal open={this.state.loginModal} toggleLoginModal={this.toggleLoginModal} toggleSignupModal={this.toggleSignupModal} />
                <SignupModal open={this.state.signupModal} toggleLoginModal={this.toggleLoginModal} toggleSignupModal={this.toggleSignupModal} />
            </div>
        );
    }
}
const navbarCenter = {
    // display: '-webkit-box',
    // display: '-webkit-flex',
    // display: '-ms-flexbox',
    display: 'flex',
    webkitBoxOrient: 'horizontal',
    WebkitBoxDirection: 'normal',
    webkitFlexDirection: 'row',
    msFlexDirection: 'row',
    flexDirection: 'row',
    height: '77px',
    webkitBoxPack: 'center',
    webkitJustifyContent: 'center',
    msFlexPack: 'center',
    justifyContent: 'center',
    maxWidth: '1010px',
    padding: '10px 10px',
    webkitTransition: 'height .2s ease-in-out',
    transition: 'height .2s ease-in-out',
    width: '100%',
    margin: 'auto'
}

const logo = {
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: '#4B0082',
    webkitBoxReflect: 'below 8px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%, transparent), to(rgba(255, 255, 255, 0.1)))'
}

const modalStyle = {
    margin: 5,
    background: '#eb94d0',
    backgroundImage: 'linear-gradient(to bottom, #eb94d0, #2079b0)',
    borderRadius: '28px'
}

const font = {
    fontFamily: 'Monoton',
    fontSize: '30px'
}