import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_TODOS = gql`
  {
    getUserTodos {
      id
      content
      author {
          id
          name
      }
      status
    }
  }
`;

const withTodos = Component => props => {
  return (
    <Query query={GET_TODOS}>
      {({ loading, data }) => {
        return (
          <Component todosLoading={loading} todos={data && data.getUserTodos} {...props} />
        );
      }}
    </Query>
  );
};

export default withTodos;