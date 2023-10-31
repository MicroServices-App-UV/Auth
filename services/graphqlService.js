const client = require("../config/apollo-config");
const gql = require("graphql-tag");
const { request } = require("graphql-request");

const shareID = async (req, res, next) => {
  try {
    request(
      "http://localhost:3000/graphql",
      `query sendID($id: String){
      sendID(id: $id)
    }`,
      {
        id: req.session.user._id,
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

module.exports = { shareID };
