import React, { Component } from 'react';

import { FormControl, TextField } from '@material-ui/core'
import { withAddTodo } from '../providers';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault();

        console.log('asd');
        // this.props.addTodo({
        //     content: event.target.content.value
        // });
    }

    render() {
        return (
            <div className="todo-form">
                <form onSubmit={(event) => this.submitForm(event)}>
                    <FormControl fullWidth >
                        <TextField fullWidth type="textarea" name="content" id="todoContent" placeholder="Create new todo..." />
                    </FormControl>
                </form>
            </div>
        )
    }
}

export default withAddTodo(TodoForm);