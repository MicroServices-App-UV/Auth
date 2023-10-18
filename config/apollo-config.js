require('dotenv').config({ path: '../config/config.env' });
const ApolloClient = require('apollo-boost').ApolloClient;
const fetch = require('cross-fetch/polyfill').fetch;
const createHttpLink = require('apollo-link-http').createHttpLink;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;

const client = new ApolloClient({
    link: createHttpLink({
        uri: process.env.GRAPHQL_API,
        fetch: fetch
    }),
    cache: new InMemoryCache()
});

module.exports = client;