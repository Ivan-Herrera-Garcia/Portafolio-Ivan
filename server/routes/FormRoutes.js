const express = require("express");
const CController = require("../controllers/FormData");
const api = express.Router();


// Crear comentario
api.post("/comentario",  CController.crearComentario);


module.exports = api;