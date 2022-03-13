import React from 'react';

import { FormControl, TextField, Box } from '@material-ui/core'
import { withAddTodo } from '../providers';

const TodoForm = (props) => {

    const submitForm = (event) => {
        event.preventDefault();

        props.addTodo({
            content: event.target.content.value
        });
    }

    return (
        <Box component="div" className="todo-form">
            <form onSubmit={(event) => submitForm(event)}>
                <FormControl fullWidth >
                    <TextField fullWidth type="textarea" name="content" id="todoContent" placeholder="Create new todo..." />
                </FormControl>
            </form>
        </Box>
    )
}

export default withAddTodo(TodoForm);