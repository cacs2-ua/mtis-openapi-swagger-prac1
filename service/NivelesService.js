'use strict';

const db = require('../ConexionDB/Conexion');
var utils = require('../utils/Utils.js');

/**
 * Borrar un nivel
 *
 * nivel Integer Nivel
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200_1
 **/
exports.borrarNivel = function(nivel,wSKey) {
  return new Promise((resolve, reject) => {
    db.borrarNivel(nivel)
      .then((affectedRows) => {
        if (affectedRows > 0) {
          resolve({ message: "Nivel borrado correctamente" });
        } else {
          resolve({ message: "No se encontró el nivel para borrar" });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * Consultar un nivel
 *
 * nivel Integer Nivel
 * wSKey String Clave de autenticación WSKey
 * returns Nivel
 **/
exports.consultarNivel = function(nivel,wSKey) {
  return new Promise((resolve, reject) => {
    db.consultarNivel(nivel)
      .then((row) => {
        if (row) {
          resolve(row);
        } else {
          resolve({ message: "Nivel no encontrado" });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * Modificar un nivel existente
 *
 * body Nivel 
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200
 **/
exports.modificarNivel = function(body,wSKey) {
  return new Promise((resolve, reject) => {
    db.modificarNivel(body)
      .then((affectedRows) => {
        if (affectedRows > 0) {
          resolve({ status: 200, message: "Nivel modificado correctamente" });
        } else {
          resolve({ status: 404, message: "No se encontró el nivel para modificar" });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
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
    await db.insertarNivel(body);
    const newNivel = await db.consultarNivel(body.nivel);
    if (newNivel) {
      // Se añade el detalle de salida al objeto retornado
      newNivel.salida = "Nivel insertado y recuperado exitosamente";
      return newNivel;
    } else {
      return { 
        message: "Nivel insertado pero no se pudo recuperar",
        salida: "Nivel insertado, pero ocurrió un inconveniente al recuperarlo" 
      };
    }
  } catch (error) {
    // Se re-lanza el error incluyendo ya el detalle en error.salida
    throw error;
  }
};




