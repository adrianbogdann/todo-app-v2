import React, { Component } from 'react'

import { withTodos } from '../providers';
import { TodoList, TodoForm } from '../components';

// import { Container, Row, Col } from 'reactstrap';
import { Container, Grid } from '@material-ui/core';
import '../styles/styles.css';

class TodoRoot extends Component {
    render() {
        const { todos, todosLoading } = this.props;

        return (
            <Container>
                <h2 className="todo-title">T O D O</h2>
                <hr />
                <Grid container>
                    <Grid item xs={8}>
                        <TodoForm />
                        <TodoList todosLoading={todosLoading} todos={todos} />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default withTodos(TodoRoot);