'use strict';

var utils = require('../utils/writer.js');
var Salas = require('../service/SalasService');

module.exports.borrarSala = function borrarSala (req, res, next, codigoSala, wSKey) {
  Salas.borrarSala(codigoSala, wSKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultarSala = function consultarSala (req, res, next, codigoSala, wSKey) {
  Salas.consultarSala(codigoSala, wSKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modificarSala = function modificarSala (req, res, next, body, wSKey) {
  Salas.modificarSala(body, wSKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nuevoSala = function nuevoSala (req, res, next, body, wSKey) {
  Salas.nuevoSala(body, wSKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
