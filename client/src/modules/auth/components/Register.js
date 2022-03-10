import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { RegisterUser } from '../providers'
// import { Navigate } from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            mail: '',
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

    handleSubmit = (event) => {
        event.preventDefault();
        let response = this.props.registerUser({
            name: this.state.username,
            email: this.state.mail,
            password: this.state.password
        })

        if (response.data) {
            // Redirect to home page
            //doesnt work -> return <Navigate to='/' replace={true} />
            window.location.href = '/';
        }

    }

    render() {
        return (
            <Paper >
                <Typography variant='h3' component='h1'>
                    Register
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
                        id='mail'
                        name='mail'
                        label='E-Mail'
                        type='email'
                        value={this.state.mail}
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
                        Register
                    </Button>
                </form>
            </Paper>
        );
    }
}

export default RegisterUser(Register);