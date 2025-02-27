'use strict';


/**
 * Borrar una sala por su código
 *
 * codigoSala Integer Código de la sala
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200_1
 **/
exports.borrarSala = function(codigoSala,wSKey) {
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
 * Consultar una sala por su código
 *
 * codigoSala Integer Código de la sala
 * wSKey String Clave de autenticación WSKey
 * returns Sala
 **/
exports.consultarSala = function(codigoSala,wSKey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "codigoSala" : 6,
  "id" : 0,
  "nombre" : "nombre",
  "nivel" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modificar una sala existente
 *
 * body Sala 
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200
 **/
exports.modificarSala = function(body,wSKey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message",
  "status" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear una nueva sala
 *
 * body Sala 
 * wSKey String Clave de autenticación WSKey
 * returns Sala
 **/
exports.nuevoSala = function(body,wSKey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "codigoSala" : 6,
  "id" : 0,
  "nombre" : "nombre",
  "nivel" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

