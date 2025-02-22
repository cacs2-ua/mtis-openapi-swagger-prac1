'use strict';


/**
 * Borrar un nivel
 *
 * nivel Integer Nivel
 * returns inline_response_200_1
 **/
exports.borrarNivel = function(nivel) {
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
 * Consultar un nivel
 *
 * nivel Integer Nivel
 * returns Nivel
 **/
exports.consultarNivel = function(nivel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "descripcion",
  "id" : 0,
  "nivel" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modificar un nivel existente
 *
 * body Nivel 
 * returns inline_response_200
 **/
exports.modificarNivel = function(body) {
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
 * Crear un nuevo nivel
 *
 * body Nivel 
 * returns Nivel
 **/
exports.nuevoNivel = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "descripcion",
  "id" : 0,
  "nivel" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

