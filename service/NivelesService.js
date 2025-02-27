'use strict';

const db = require('../ConexionDB/Conexion');

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
    const validWsKeyRow = await db.obtenerRestKey();
    if (!validWsKeyRow) {
      throw { status: 500, message: "No se encontró la WSKey en la base de datos" };
    }
    // Suponiendo que la columna que contiene la clave se llama 'restKey'
    const VALID_WS_KEY = validWsKeyRow.rest_key;

    // Validamos que se haya proporcionado la WSKey en la solicitud
    if (!wSKey) {
      throw { status: 400, message: "WSKey no proporcionada en la cabecera HTTP" };
    }
    if (wSKey !== VALID_WS_KEY) {
      throw { status: 403, message: "Acceso no autorizado" };
    }

    // Si la WSKey es correcta, se continúa con la inserción
    await db.insertarNivel(body);
    const newNivel = await db.consultarNivel(body.nivel);
    if (newNivel) {
      return newNivel;
    } else {
      return { message: "Nivel insertado pero no se pudo recuperar" };
    }
  } catch (error) {
    throw error;
  }
};



