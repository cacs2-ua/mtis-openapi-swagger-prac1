'use strict';

const notificacionesRepository = require('../ConexionDB/NotificacionesRepository');
const fakeSMTP = require('../ConexionFakeSMTP/ConexionFakeSMTP');

/**
 * Notificar error a un empleado
 *
 * @param {Object} body - Objeto que contiene los parámetros { nif, error }.
 * @returns {Promise<Object>} - Resultado de la notificación.
 */
exports.notificarError = function(body) {
  return new Promise(async (resolve, reject) => {
    try {
      const { nif, error } = body;
      const empleado = await notificacionesRepository.getEmpleadoByNif(nif);
      if (!empleado) {
        return reject({ message: 'Empleado no encontrado.' });
      }
      const to = empleado.email;
      const subject = 'Notificación: Error en el sistema';
      const text = `Se ha detectado el siguiente error: ${error}`;
      await fakeSMTP.sendEmail(to, subject, text);
      resolve({ message: 'Notificación de error enviada exitosamente.' });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Notificar presencia en sala
 *
 * @returns {Promise<Object>} - Resultado de la notificación.
 */
exports.notificarPresenciaSala = function() {
  return new Promise(async (resolve, reject) => {
    try {
      const registros = await notificacionesRepository.getPresenciaSalaData();
      if (registros.length === 0) {
        return resolve({ message: 'No hay registros de presencia para notificar.' });
      }
      const emailPromises = registros.map(registro => {
        const to = registro.email;
        const subject = 'Notificación: Presencia en sala';
        const text = `Se ha detectado presencia en la sala: ${registro.salaNombre}`;
        return fakeSMTP.sendEmail(to, subject, text);
      });
      await Promise.all(emailPromises);
      resolve({ message: 'Notificaciones de presencia en sala enviadas exitosamente.' });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Notificar usuario válido
 *
 * @param {Object} body - Objeto que contiene el parámetro { nif }.
 * @returns {Promise<Object>} - Resultado de la notificación.
 */
exports.notificarUsuarioValido = function(body) {
  return new Promise(async (resolve, reject) => {
    try {
      const { nif } = body;
      const empleado = await notificacionesRepository.getEmpleadoByNif(nif);
      if (!empleado) {
        return reject({ message: 'Empleado no encontrado.' });
      }
      const to = empleado.email;
      const subject = 'Notificación: Usuario válido';
      const text = `El usuario con NIF ${nif} es válido.`;
      await fakeSMTP.sendEmail(to, subject, text);
      resolve({ message: 'Notificación de usuario válido enviada exitosamente.' });
    } catch (err) {
      reject(err);
    }
  });
}
