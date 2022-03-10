import React, { Component } from 'react'

import { Login } from '../components';

import { Container, Grid } from '@material-ui/core';
import '../styles/styles.css';

class AuthRoot extends Component {
    render() {

        return (
            <Container>
                <h2 className="todo-title">Login</h2>
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