'use strict';

var utils = require('../utils/writer.js');
var Notificaciones = require('../service/NotificacionesService');

module.exports.notificarError = function notificarError (req, res, next, body) {
  Notificaciones.notificarError(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificarPresenciaSala = function notificarPresenciaSala (req, res, next) {
  Notificaciones.notificarPresenciaSala()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificarUsuarioValido = function notificarUsuarioValido (req, res, next, body) {
  Notificaciones.notificarUsuarioValido(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
