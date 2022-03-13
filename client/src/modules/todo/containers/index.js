import React, { Component } from 'react'

import { withTodos } from '../providers';
import { TodoList, TodoForm } from '../components';

import { Container, Grid, Typography, Box } from '@material-ui/core';
import '../styles/styles.css';

class TodoRoot extends Component {
    render() {
        const { todos, todosLoading } = this.props;

        return (
            <Container>
                <Grid container justifyContent='center'>
                    <Grid item xs={8}>
                        <Box component='div' sx={{ mt: 5 }}>
                            <Typography variant="h3" component="h3" className="todo-title">T O D O</Typography>
                        </Box>
                        <hr />
                        <TodoForm />
                        <TodoList todosLoading={todosLoading} todos={todos} />
                    </Grid>
                </Grid>
            </Container >
        )
    }
}

export default withTodos(TodoRoot);