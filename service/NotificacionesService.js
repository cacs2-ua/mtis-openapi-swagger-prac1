'use strict';

const notificacionesRepository = require('../ConexionDB/NotificacionesRepository');
const fakeSMTP = require('../ConexionFakeSMTP/ConexionFakeSMTP');

/**
 * Notificar error a un empleado
 *
 * body Notificaciones_error_body 
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200_1
 **/
exports.notificarError = function(body,wSKey) {
  return new Promise(async (resolve, reject) => {
    try {
      const { nif, error } = body;
      const empleado = await notificacionesRepository.getEmpleadoByNif(nif);
      if (!empleado) {
        return reject({ message: 'Empleado no encontrado.' });
      }
      const to = empleado.email;
      const subject = "Notificacion: Error en el sistema";
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
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200_1
 **/
exports.notificarPresenciaSala = function(wSKey) {
  return new Promise(async (resolve, reject) => {
    try {
      const registros = await notificacionesRepository.getPresenciaSalaData();
      if (registros.length === 0) {
        return resolve({ message: 'No hay registros de presencia para notificar.' });
      }
      const emailPromises = registros.map(registro => {
        const to = registro.email;
        const subject = 'Notificacion: Presencia en sala';
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
 * body Notificaciones_usuarioValido_body 
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200_1
 **/
exports.notificarUsuarioValido = function(body, wSKey) {
  return new Promise(async (resolve, reject) => {
    try {
      const { nif } = body;
      const empleado = await notificacionesRepository.getEmpleadoByNif(nif);
      if (!empleado) {
        return reject({ message: 'Empleado no encontrado.' });
      }
      const to = empleado.email;
      let subject, text;
      // Se valida la columna "valido": 1 -> válido, 0 -> no válido.
      if (empleado.valido === 1) {
        subject = 'Notificacion: Usuario valido';
        text = `El usuario con NIF ${nif} es valido.`;
      } else {
        subject = 'Notificacion: Usuario no valido';
        text = `El usuario con NIF ${nif} no es valido.`;
      }
      await fakeSMTP.sendEmail(to, subject, text);
      resolve({ message: 'Notificacion de usuario enviada exitosamente.' });
    } catch (err) {
      reject(err);
    }
  });
};
