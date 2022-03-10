import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const LOGIN_USER = gql`
  mutation($input: LoginInput!) {
    login(input: $input) {
      name,
      token
    }
  }
`;

const loginUser = Component => props => {
    return (
        <Mutation mutation={LOGIN_USER}>
            {loginUser => {
                return (
                    <Component loginUser={(credentials) => loginUser({
                        variables: { input: credentials }
                    })}
                    />
                )
            }}
        </Mutation>
    );
};

export default loginUser;