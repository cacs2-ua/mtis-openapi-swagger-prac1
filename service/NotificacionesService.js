'use strict';


/**
 * Notificar error a un empleado
 *
 * body Notificaciones_error_body 
 * returns inline_response_200_1
 **/
exports.notificarError = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Notificar presencia en sala
 *
 * returns inline_response_200_1
 **/
exports.notificarPresenciaSala = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Notificar usuario válido
 *
 * body Notificaciones_usuarioValido_body 
 * returns inline_response_200_1
 **/
exports.notificarUsuarioValido = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

