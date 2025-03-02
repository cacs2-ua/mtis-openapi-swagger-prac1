'use strict';

const nivelesRepository = require('../ConexionDB/NivelesRepository');
var utils = require('../utils/Utils.js');

/**
 * Borrar un nivel
 *
 * nivel Integer Nivel
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200_1
 **/
exports.borrarNivel = async function(nivel, wSKey) {
  try {
    await utils.validarWSKey(wSKey);

    const affectedRows = await nivelesRepository.borrarNivel(nivel);
    if (affectedRows > 0) {
      return { 
        status: 200,
        message: "Nivel borrado correctamente",
        salida: "Nivel borrado correctamente"};
    } else {
      return { 
        status: 404,
        message: "No se encontró el nivel para borrar",
        salida: "No se encontró el nivel para borrar"};
    }
  } catch (error) {
      throw { 
        status: 404,
        message: error.message,
        salida: error.message 
      };
  }
}

/**
 * Consultar un nivel
 *
 * nivel Integer Nivel
 * wSKey String Clave de autenticación WSKey
 * returns Nivel
 **/
exports.consultarNivel = async function(nivel, wSKey) {
  try {
    await utils.validarWSKey(wSKey);

    const row = await nivelesRepository.consultarNivel(nivel);
    if (row) {
      return {
        ...row,
        status: 200,
        message: "Nivel consultado correctamente",
        salida: "Nivel consultado correctamente"
      };
    } else {
      return { 
        status: 404,
        message: "Nivel no encontrado",
        salida: "Nivel no encontrado"
      };
    }
  } catch (error) {
      throw { 
        status: 404,  
        message: error.message,
        salida: error.message 
      };
  }
}

/**
 * Modificar un nivel existente
 *
 * body Nivel 
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200
 **/
exports.modificarNivel = async function(body, wSKey) {
  try {
    console.log(wSKey);
    await utils.validarWSKey(wSKey);

    const affectedRows = await nivelesRepository.modificarNivel(body);
    if (affectedRows > 0) {
      return { 
        status: 200, 
        message: "Nivel modificado correctamente",
        salida: "Nivel modificado correctamente" };
    } else {
      return { 
        status: 404, 
        message: "No se encontró el nivel para modificar",
        salida: "No se encontró el nivel para modificar" };
    }
  } catch (error) {
      throw { 
        status: 404, 
        message: error.message,
        salida: error.message 
      };
  }
}

/**
 * Crear un nuevo nivel
 *
 * body Nivel 
 * wSKey String Clave de autenticación WSKey
 * returns Nivel
 **/
exports.nuevoNivel = async function(body, wSKey) {
  try {
    // Obtenemos la clave válida de la base de datos
    await utils.validarWSKey(wSKey);

    // Si la WSKey es correcta, se continúa con la inserción
    await nivelesRepository.insertarNivel(body);
    return { 
      status: 201, 
      message: "Nivel insertado correctamente",
      salida: "Nivel insertado correctamente" 
    };
  } catch (error) {
    throw { 
      status: 404,
      message: error.message,
      salida: error.message 
    };
  }
};




