import React, { Component } from 'react'
import { Container, Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { LoginUser } from '../providers'
import PurpleButton from './Button'
// import { Navigate } from 'react-router-dom'


//Class component so I can remember how to work with it
class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (event) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let response = await this.props.loginUser({
            email: this.state.username,
            password: this.state.password
        });

        if (response) {
            window.localStorage.setItem('token', response.data.login.token)

            // Redirect to home page
            //doesnt work -> return <Navigate to='/' replace={true} />
            window.location.href = '/';
        }
    }

    render() {

        return (
            <Container >
                <Box component='div' sx={{ mt: 5 }}>
                    <Typography variant='h3' component='h2' className="auth-header">
                        Login
                    </Typography>
                    <form onSubmit={this.handleSubmit}
                    >
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='username'
                            name='username'
                            label='Username'
                            value={this.state.username}
                            onChange={this.handleChange}
                            autoFocus
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='password'
                            name='password'
                            label='Password'
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <PurpleButton
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                        >
                            Sign in
                        </PurpleButton>
                    </form>
                </Box>
            </Container>
        );
    }
}

export default LoginUser(Login);