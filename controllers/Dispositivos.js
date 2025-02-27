'use strict';

var utils = require('../utils/writer.js');
var Dispositivos = require('../service/DispositivosService');

module.exports.borrarDispositivo = function borrarDispositivo (req, res, next, codigo, wSKey) {
  Dispositivos.borrarDispositivo(codigo, wSKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consultarDispositivo = function consultarDispositivo (req, res, next, codigo, wSKey) {
  Dispositivos.consultarDispositivo(codigo, wSKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modificarDispositivo = function modificarDispositivo (req, res, next, body, wSKey) {
  Dispositivos.modificarDispositivo(body, wSKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nuevoDispositivo = function nuevoDispositivo (req, res, next, body, wSKey) {
  Dispositivos.nuevoDispositivo(body, wSKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
