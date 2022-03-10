import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { LoginUser } from '../providers'
// import { Navigate } from 'react-router-dom'

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
            console.log('DATA', response.data.login.token);
            window.localStorage.setItem('token', response.data.login.token)

            // Redirect to home page
            //doesnt work -> return <Navigate to='/' replace={true} />
            window.location.href = '/';
        }
    }

    render() {
        return (
            <Paper >
                <Typography variant='h3' component='h1'>
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
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                    >
                        Sign in
                    </Button>
                </form>
            </Paper>
        );
    }
}

export default LoginUser(Login);