'use strict';

const db = require('../ConexionDB/Conexion');
const smtp = require('../ConexionFakeSMTP/ConexionFakeSMTP');

/**
 * Notificar error a un empleado
 *
 * body Notificaciones_error_body 
 * returns inline_response_200_1
 **/
exports.notificarError = function(body) {
  return new Promise(function(resolve, reject) {
    const { nif, error } = body;
    // Consulta en la tabla empleados para obtener email y nombre
    const sql = 'SELECT email, nombreApellidos FROM empleados WHERE nifnie = ?';
    db.query(sql, [nif], function(err, results) {
      if (err) {
        return reject({ message: 'Error al consultar la base de datos', error: err });
      }
      if (results.length === 0) {
        return reject({ message: 'Empleado no encontrado' });
      }
      const empleado = results[0];
      const subject = 'Notificación de Error';
      const text = `Estimado ${empleado.nombreApellidos}, se ha detectado el siguiente error: ${error}`;
      smtp.sendEmail(empleado.email, subject, text)
        .then(() => {
          resolve({ message: 'Notificación de error enviada exitosamente' });
        })
        .catch(err => {
          reject({ message: 'Error al enviar notificación', error: err });
        });
    });
  });
};

/**
 * Notificar presencia en sala
 *
 * returns inline_response_200_1
 **/
exports.notificarPresenciaSala = function() {
  return new Promise(function(resolve, reject) {
    // Consulta para obtener empleados presentes y el nombre de la sala (se asume que se envían notificaciones del día actual)
    const sql = `
      SELECT e.email, e.nombreApellidos, s.nombre AS salaNombre
      FROM controlpresencia cp
      JOIN empleados e ON cp.idEmpleado = e.id
      JOIN salas s ON cp.idSala = s.id
      WHERE DATE(cp.fechahora) = CURDATE()
    `;
    db.query(sql, [], function(err, results) {
      if (err) {
        return reject({ message: 'Error al consultar la base de datos', error: err });
      }
      if (results.length === 0) {
        return resolve({ message: 'No hay empleados presentes en salas en este momento' });
      }
      // Enviar notificación a cada empleado presente
      let promises = results.map(row => {
        const subject = 'Notificación de Presencia en Sala';
        const text = `Estimado ${row.nombreApellidos}, se ha detectado su presencia en la sala: ${row.salaNombre}.`;
        return smtp.sendEmail(row.email, subject, text);
      });
      Promise.all(promises)
        .then(() => resolve({ message: 'Notificaciones de presencia en sala enviadas exitosamente' }))
        .catch(err => reject({ message: 'Error al enviar notificaciones', error: err }));
    });
  });
};

/**
 * Notificar usuario válido
 *
 * body Notificaciones_usuarioValido_body 
 * returns inline_response_200_1
 **/
exports.notificarUsuarioValido = function(body) {
  return new Promise(function(resolve, reject) {
    const nif = body.nif;
    // Consulta en la tabla empleados para obtener email y nombre
    const sql = 'SELECT email, nombreApellidos FROM empleados WHERE nifnie = ?';
    db.query(sql, [nif], function(err, results) {
      if (err) {
        return reject({ message: 'Error al consultar la base de datos', error: err });
      }
      if (results.length === 0) {
        return reject({ message: 'Empleado no encontrado' });
      }
      const empleado = results[0];
      const subject = 'Notificación de Usuario Válido';
      const text = `Estimado ${empleado.nombreApellidos}, su usuario ha sido validado correctamente.`;
      smtp.sendEmail(empleado.email, subject, text)
        .then(() => {
          resolve({ message: 'Notificación de usuario válido enviada exitosamente' });
        })
        .catch(err => {
          reject({ message: 'Error al enviar notificación', error: err });
        });
    });
  });
};
