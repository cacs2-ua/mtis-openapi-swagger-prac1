'use strict';

const db = require('../ConexionDB/Conexion');

/**
 * Borrar un nivel
 *
 * @param {number} nivel - Nivel que se desea borrar.
 * @returns {Promise<Object>} - Objeto con mensaje de resultado.
 */
exports.borrarNivel = function(nivel) {
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
 * @param {number} nivel - Nivel que se desea consultar.
 * @returns {Promise<Object>} - Registro del nivel o mensaje si no existe.
 */
exports.consultarNivel = function(nivel) {
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
 * @param {Object} body - Objeto con la información del nivel a modificar.
 * @param {number} body.nivel - Valor del nivel (identificador).
 * @param {string} body.descripcion - Nueva descripción para el nivel.
 * @returns {Promise<Object>} - Objeto con estado y mensaje del resultado.
 */
exports.modificarNivel = function(body) {
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
 * @param {Object} body - Objeto con la información del nuevo nivel.
 * @param {number} body.nivel - Valor del nivel.
 * @param {string} body.descripcion - Descripción del nivel.
 * @returns {Promise<Object>} - Registro del nivel recién insertado.
 */
exports.nuevoNivel = function(body) {
  return new Promise((resolve, reject) => {
    db.insertarNivel(body)
      .then((insertId) => {
        // Se asume que "nivel" es un valor único para consultar el registro insertado.
        db.consultarNivel(body.nivel)
          .then((newNivel) => {
            if (newNivel) {
              resolve(newNivel);
            } else {
              resolve({ message: "Nivel insertado pero no se pudo recuperar" });
            }
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
