'use strict';


/**
 * Borrar un dispositivo
 *
 * codigo Integer Código del dispositivo
 * returns inline_response_200_1
 **/
exports.borrarDispositivo = function(codigo) {
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
 * Consultar un dispositivo
 *
 * codigo Integer Código del dispositivo
 * returns Dispositivo
 **/
exports.consultarDispositivo = function(codigo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "descripcion",
  "codigo" : 6,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modificar un dispositivo existente
 *
 * body Dispositivo 
 * returns inline_response_200
 **/
exports.modificarDispositivo = function(body) {
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
 * Crear un nuevo dispositivo
 *
 * body Dispositivo 
 * returns Dispositivo
 **/
exports.nuevoDispositivo = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "descripcion",
  "codigo" : 6,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

