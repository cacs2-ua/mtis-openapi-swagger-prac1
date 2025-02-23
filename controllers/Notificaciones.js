'use strict';

var utils = require('../utils/writer.js');
var Notificaciones = require('../service/NotificacionesService');

module.exports.notificarError = function notificarError (req, res, next, body) {
  Notificaciones.notificarError(body)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.notificarPresenciaSala = function notificarPresenciaSala (req, res, next) {
  Notificaciones.notificarPresenciaSala()
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.notificarUsuarioValido = function notificarUsuarioValido (req, res, next, body) {
  Notificaciones.notificarUsuarioValido(body)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
