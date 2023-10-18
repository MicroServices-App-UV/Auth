const client = require('../config/apollo-config');
const gql = require('graphql-tag');

const executeQuery = async() =>{
  try {
    const { data } = await client.query({
      query: gql`
        query {
          hello
        }
      `,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = executeQuery