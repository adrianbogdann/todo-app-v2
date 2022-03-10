import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const REGISTER_USER = gql`
  mutation($input: RegisterInput!) {
    register(input: $input ) {
      name,
      email
    }
  }
`;

const registerUser = Component => props => {
  return (
    <Mutation mutation={REGISTER_USER}>
      {registerUser => {
        return (
          <Component registerUser={(registerInput) => registerUser({
            variables: { input: registerInput }
          })}
          />
        )
      }}
    </Mutation>
  );
};

export default registerUser;