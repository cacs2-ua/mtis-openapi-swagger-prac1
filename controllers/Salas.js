'use strict';

var utils = require('../utils/writer.js');
var Salas = require('../service/SalasService');

module.exports.borrarSala = function borrarSala (req, res, next, codigoSala) {
  Salas.borrarSala(codigoSala)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultarSala = function consultarSala (req, res, next, codigoSala) {
  Salas.consultarSala(codigoSala)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modificarSala = function modificarSala (req, res, next, body) {
  Salas.modificarSala(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nuevoSala = function nuevoSala (req, res, next, body) {
  Salas.nuevoSala(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
