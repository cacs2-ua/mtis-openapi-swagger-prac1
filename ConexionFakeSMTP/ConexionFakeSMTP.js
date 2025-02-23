'use strict';

const nodemailer = require('nodemailer');

// Configuración del transportador para FakeSMTP
// Asegúrate de que FakeSMTP esté ejecutándose en localhost en el puerto 2525 (o el que configures)
const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 2525, // Cambia este puerto si tu FakeSMTP utiliza otro
  secure: false,
  tls: {
    rejectUnauthorized: false
  }
});

/**
 * Envía un email utilizando FakeSMTP.
 * @param {string} to - Dirección de email del destinatario.
 * @param {string} subject - Asunto del email.
 * @param {string} text - Contenido del email.
 * @returns {Promise} - Promesa que se resuelve al enviar el email.
 */
function sendEmail(to, subject, text) {
  const mailOptions = {
    from: 'no-reply@mtis-openapi-swagger.com',
    to: to,
    subject: subject,
    text: text
  };

  return transporter.sendMail(mailOptions);
}

module.exports = {
  sendEmail
};
