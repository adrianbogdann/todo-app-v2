import React, { Component } from 'react'

import { Login } from '../components';

import { Container, Grid, Typography } from '@material-ui/core';
import '../styles/styles.css';

class AuthRoot extends Component {
    render() {

        return (
            <Container>
                <Typography variant='h3' component='h2' className="todo-title">
                    Login
                </Typography>
                <hr />
                <Grid container>
                    <Grid item xs={8}>
                        <Login />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default AuthRoot;