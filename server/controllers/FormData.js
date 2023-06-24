const Post = require("../models/FormData");


// Funciones
// Crear comentarios
function crearComentario(req, res) {
  const post = new Post(req.body);
  
  post.save((error, postStored) => {
    if (error) res.status(400).send({ msg: "Error al crear el comentario" });
    else res.status(200).send(postStored);
  });
}

module.exports = {
    crearComentario,
};