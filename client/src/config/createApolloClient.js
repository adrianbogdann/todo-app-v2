import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:3301/api'
});

export default client;