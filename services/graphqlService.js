const client = require("../config/apollo-config");
const gql = require("graphql-tag");
const { request } = require("graphql-request");

const executeQuery = async () => {
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
};
const shareUserInfo = async (req, res, next) => {
  try {
    request(
      "http://localhost:3000/graphql",
      `mutation createUser($_id: String!, $firstName: String!, $lastName: String!, $username: String! ,$email: String!){
        createUser(input:{
          _id: $_id
          firstName: $firstName
          lastName: $lastName 
          username: $username
          email: $email })
        {
          _id
          firstName
          lastName
          username
          email
        }
      }`,
      {
        _id: "1",
        firstName: "Sebastian",
        lastName: "Caicedo",
        username: "sdrivert",
        email: "sdrivert@hotmail.com",
      }
    )
      .then((data) =>
        console.log("Se ha creado el usuario, que gonorrea: ", data)
      )
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
};
module.exports = { executeQuery, shareUserInfo };
