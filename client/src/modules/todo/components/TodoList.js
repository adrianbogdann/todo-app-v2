import React, { Component } from 'react';
import { Card, CardContent, Checkbox } from '@material-ui/core'
import { CheckCircle, RadioButtonUnchecked } from '@material-ui/icons'

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.showTodos = this.showTodos.bind(this);
    }

    showTodos() {
        const { todos, todosLoading } = this.props;

        if (!todosLoading && todos && todos.length > 0) {
            return todos.map(todo => {
                return (
                    <Card key={todo.id} body outline className="todo-card">
                        <CardContent>
                            <Checkbox
                                icon={<RadioButtonUnchecked />}
                                checkedIcon={<CheckCircle className="checkedColor" />}
                            />
                            {todo.content}
                        </CardContent>
                    </Card>
                );
            });
        } else {
            return (
                <div>
                    <h3>No todos available</h3>
                    <p>Use the form on the right to create a new todo.</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="todos-container">
                {this.showTodos()}
            </div>
        );
    }
}