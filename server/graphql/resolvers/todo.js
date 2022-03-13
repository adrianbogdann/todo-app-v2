const { Todo } = require('../../database/models');

const { AuthenticationError, assertResolveFunctionsPresent } = require('apollo-server-express');

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

        async updateTodo(_, { id, status }, { user = null }) {
            if (!user) {
                throw new AuthenticationError('You must login to create a todo');
            }

            return Todo.update(
                { status },
                {
                    where: { id },
                    returning: true,
                },
            ).then(([rowsUpd, [Todo]]) => {
                // console.log('TODO', Todo.dataValues);

                return {
                    id: Todo.dataValues.id,
                    status: Todo.dataValues.status
                }
            });

        },

        async deleteTodo(_, { id }, { user = null }) {
            if (!user) {
                throw new AuthenticationError('You must login to create a todo');
            }

            return Todo.destroy({ where: { id } })
        }
    },

    Query: {
        async getAllTodos(root, args, context) {
            return await Todo.findAll();
        },
        async getUserTodos(_, args, { user = null }) {
            // console.log('Context', user);
            return await Todo.findAll({ where: { userId: user.id } });
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