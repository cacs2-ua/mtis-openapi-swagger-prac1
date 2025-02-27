'use strict';

var utils = require('../utils/writer.js');
var Notificaciones = require('../service/NotificacionesService');

module.exports.notificarError = function notificarError (req, res, next, body, wSKey) {
  Notificaciones.notificarError(body, wSKey)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.notificarPresenciaSala = function notificarPresenciaSala (req, res, next, wSKey) {
  Notificaciones.notificarPresenciaSala(wSKey)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.notificarUsuarioValido = function notificarUsuarioValido (req, res, next, body, wSKey) {
  Notificaciones.notificarUsuarioValido(body, wSKey)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
