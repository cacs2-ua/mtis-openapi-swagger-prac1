'use strict';

var utils = require('../utils/writer.js');
var Niveles = require('../service/NivelesService');

/**
 * Borra un nivel y responde con el estado HTTP adecuado.
 * Si se borra correctamente, se retorna 200, y si no se encuentra, 404.
 */
module.exports.borrarNivel = function borrarNivel(req, res, next, nivel) {
  Niveles.borrarNivel(nivel)
    .then(function(response) {
      // Si el mensaje indica que el nivel fue borrado correctamente, usamos 200, de lo contrario 404.
      const statusCode = (response.message && response.message.indexOf("borrado correctamente") !== -1) ? 200 : 404;
      utils.writeJson(res, response, statusCode);
    })
    .catch(function(error) {
      utils.writeJson(res, { message: "Error interno del servidor" }, 500);
    });
};

/**
 * Consulta un nivel y responde con el estado HTTP adecuado.
 * Si se encuentra el nivel, se retorna 200, y si no, 404.
 */
module.exports.consultarNivel = function consultarNivel(req, res, next, nivel) {
  Niveles.consultarNivel(nivel)
    .then(function(response) {
      if(response && response.id !== undefined) {
        utils.writeJson(res, response, 200);
      } else {
        utils.writeJson(res, { message: "Nivel no encontrado" }, 404);
      }
    })
    .catch(function(error) {
      utils.writeJson(res, { message: "Error interno del servidor" }, 500);
    });
};

/**
 * Modifica un nivel existente y responde con el estado HTTP adecuado.
 * Se utiliza el status retornado por el servicio (200 si fue modificado, 404 si no se encontró).
 */
module.exports.modificarNivel = function modificarNivel(req, res, next, body) {
  Niveles.modificarNivel(body)
    .then(function(response) {
      // Se asume que el servicio retorna un objeto con una propiedad "status".
      const statusCode = response.status || 200;
      utils.writeJson(res, response, statusCode);
    })
    .catch(function(error) {
      utils.writeJson(res, { message: "Error interno del servidor" }, 500);
    });
};

/**
 * Crea un nuevo nivel y responde con el estado HTTP adecuado.
 * Si se crea correctamente, se retorna 201 (Created); de lo contrario, se utiliza 400.
 */
module.exports.nuevoNivel = function nuevoNivel(req, res, next, body) {
  Niveles.nuevoNivel(body)
    .then(function(response) {
        utils.writeJson(res, response, 201);
    })
    .catch(function(error) {
      utils.writeJson(res, { message: "Error interno del servidor" }, 500);
    });
};
