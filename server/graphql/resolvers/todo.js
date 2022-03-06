const { Todo } = require('../../database/models');

const { AuthenticationError } = require('apollo-server-express');

module.exports = {
    Mutation: {
        async createTodo(_, { content }, { user = null }) {
            if (!user) {
                throw new AuthenticationError('You must login to create a todo');
            }
            return Todo.create({
                userId: user.id,
                content,
                status: 'active',
            });
        },
    },

    Query: {
        async getAllTodos(root, args, context) {
            return await Todo.findAll();
        },
        async getSingleTodo(_, { todoId }, context) {
            return Todo.findByPk(todoId);
        },
    },

    Todo: {
        author(todo) {
            return todo.getAuthor();
        },
    },
};