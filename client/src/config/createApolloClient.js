import ApolloClient from 'apollo-boost';
import { AUTH_TOKEN } from '../constants';

const client = new ApolloClient({
    uri: 'http://localhost:3301/api',
    request: async (operation) => {
        const token = window.localStorage.getItem(AUTH_TOKEN);

        // Pass token to headers
        operation.setContext({
            headers: {
                Authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
});

export default client;