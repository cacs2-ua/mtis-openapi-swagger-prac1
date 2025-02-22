'use strict';

var utils = require('../utils/writer.js');
var Niveles = require('../service/NivelesService');

module.exports.borrarNivel = function borrarNivel (req, res, next, nivel) {
  Niveles.borrarNivel(nivel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultarNivel = function consultarNivel (req, res, next, nivel) {
  Niveles.consultarNivel(nivel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modificarNivel = function modificarNivel (req, res, next, body) {
  Niveles.modificarNivel(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nuevoNivel = function nuevoNivel (req, res, next, body) {
  Niveles.nuevoNivel(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
