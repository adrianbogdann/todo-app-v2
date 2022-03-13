import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Card, CardContent, Checkbox, Box, IconButton, Typography } from '@material-ui/core'
import { CheckCircle, RadioButtonUnchecked } from '@material-ui/icons'
import DeleteIcon from '@mui/icons-material/Delete';

const UPDATE_TODO = gql`
  mutation updateTodo($id: Int!, $status: String!) {
    updateTodo(id: $id, status: $status) {
      id
      status
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
      deleteTodo(id: $id)
  }
`;

const TodoList = (props) => {

    const [todosList, setTodosList] = useState([]);
    const [viewMode, setViewMode] = useState('all');
    const [updateTodo] = useMutation(UPDATE_TODO);
    const [deleteTodo] = useMutation(DELETE_TODO);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            setTodosList(props.todos);
        }

        return () => { isMounted = false }
    }, [props.todos]);

    const handleChange = (event) => {
        const cardIndex = event.target.closest('.todo-card').id.split('_')[1];
        const oldTodos = [...todosList];
        const todoStatus = (oldTodos[cardIndex].status === 'completed') ? 'active' : 'completed';
        oldTodos[cardIndex].status = todoStatus;

        updateTodo({ variables: { id: oldTodos[cardIndex].id, status: todoStatus } });
        setTodosList(oldTodos);
    };

    const handleDelete = (event) => {
        const cardIndex = event.target.closest('.todo-card').id.split('_')[1];
        const oldTodos = [...todosList];
        const newTodos = oldTodos.filter((todo) => todo.id !== oldTodos[cardIndex].id);

        deleteTodo({ variables: { id: oldTodos[cardIndex].id } })
        setTodosList(newTodos);
    }

    const clearCompletedTodos = () => {
        const oldTodos = [...todosList];
        const newTodos = oldTodos.filter((todo) => todo.status === 'active');

        setTodosList(newTodos);
    }

    const todosLeft = () => {
        return todosList && todosList.filter((todo) => todo.status === 'active').length
    }

    const changeViewMode = (view = 'all') => {
        setViewMode(view);
    }

    const showTodos = () => {
        const { todos, todosLoading } = props;

        if (!todosLoading && todos && todos.length > 0) {
            return todosList && todosList.map((todo, index) => {
                return (
                    (viewMode === todo.status || viewMode === 'all')
                    && <Card key={todo.id} id={'card_' + index} className="todo-card">
                        <CardContent>
                            <Checkbox
                                icon={<RadioButtonUnchecked />}
                                checkedIcon={<CheckCircle className="checkedColor" />}
                                checked={todo.status === 'completed' ? true : false}
                                onChange={handleChange}
                            />
                            <Box sx={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none', color: 'black' }} className="todoContent" component="span">
                                {todo.content}
                            </Box>
                            <IconButton size="small" onClick={handleDelete} aria-label="delete">
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </CardContent>
                    </Card>
                );
            });
        } else {
            return (
                <Box component="div">
                    <Typography variant="h3" component="h2">No todos available</Typography>
                    <Typography paragraph={true}>Use the form on the right to create a new todo.</Typography>
                </Box>
            );
        }
    }


    return (
        <>
            <Box component="div" className="todos-container">
                {showTodos()}
            </Box>
            <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }} className="todos-info">
                <Box component="span" sx={{ display: 'inline' }}>
                    {'Todos left ' + todosLeft()}
                </Box>
                <Box component="div" sx={{ display: 'flex', alignContent: 'center' }}>
                    <Box component="span" onClick={() => changeViewMode()} sx={{ display: 'inline', fontWeight: 500 }}>
                        {'All'}
                    </Box>
                    <Box component="span" onClick={() => changeViewMode('active')} sx={{ display: 'inline', ml: 2, fontWeight: 500 }}>
                        {'Active'}
                    </Box>
                    <Box component="span" onClick={() => changeViewMode('completed')} sx={{ display: 'inline', ml: 2, fontWeight: 500 }}>
                        {'Completed'}
                    </Box>
                </Box>
                <Box component="span" sx={{ display: 'flex', alignSelf: 'flex-end' }} onClick={() => clearCompletedTodos()}>
                    {'Clear completed'}
                </Box>
            </Box>
        </>

    );
}

export default TodoList;