import React, { Component } from 'react'
import { Container, Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { RegisterUser } from '../providers'
import PurpleButton from './Button';
// import { Navigate } from 'react-router-dom'

//Class component so I can remember how to work with it
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
            <Container >
                <Box component='div' sx={{ mt: 5 }}>
                    <Typography variant='h3' component='h1' className="auth-header">
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
                        <PurpleButton
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                        >
                            Register
                        </PurpleButton>
                    </form>
                </Box>
            </Container>
        );
    }
}

export default RegisterUser(Register);