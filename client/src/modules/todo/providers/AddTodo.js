import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { GET_TODOS } from './TodoList';

const ADD_TODO = gql`
  mutation($content: String!) {
    createTodo(content: $content) {
      content
    }
  }
`;

const withAddTodo = Component => props => {
    return (
        <Mutation mutation={ADD_TODO}>
            {addTodo => {
                return (
                    <Component addTodo={({ content }) => addTodo({
                        variables: { content }, refetchQueries: [
                            { query: GET_TODOS }
                        ]
                    })}
                    />
                )
            }}
        </Mutation>
    );
};

export default withAddTodo;