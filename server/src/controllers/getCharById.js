const axios = require("axios");

const getCharById = (id, res) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((resp) => {
      let { name, gender, species, origin, image, status } = resp.data;
      let char = {
        id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(char));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end({ message: "Algo pasó" });
    });
};

module.exports = getCharById;
