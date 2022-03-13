const { gql } = require('apollo-server-express');

module.exports = gql`

 type Todo {
     id: Int!
     content: String!
     author: User!
     status: String!
     createdAt: String

 }

extend type Query {
    getAllTodos: [Todo!]
    getUserTodos: [Todo!]
    getSingleTodo(todoId: Int!): Todo
}

 extend type Mutation {
     createTodo(content: String!): CreateTodoResponse
     updateTodo(id: Int!, status: String!): UpdateTodoResponse
     deleteTodo(id: Int!) : Int
 }

 type CreateTodoResponse {
    id: Int!
    content: String!
    createdAt: String!
 }

 type UpdateTodoResponse {
     id: Int!
     status: String!
 }

`;