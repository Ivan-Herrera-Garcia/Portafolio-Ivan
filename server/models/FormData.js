const mongoose = require("mongoose");

const ComentariosSchema = new mongoose.Schema({
   name: String,
   email: String,
   mensaje: String,
});


module.exports = mongoose.model("Comentarios", ComentariosSchema);
