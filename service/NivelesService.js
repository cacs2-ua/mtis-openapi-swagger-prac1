// service/DispositivosService.js
'use strict';

const dispositivosRepository = require('../ConexionDB/DispositivosRepository');
const utils = require('../utils/Utils.js');

/**
 * Borra un dispositivo.
 *
 * codigo Integer Código del dispositivo
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200_1
 **/
exports.borrarDispositivo = async function(codigo, wSKey) {
  try {
    await utils.validarWSKey(wSKey);

    const affectedRows = await dispositivosRepository.borrarDispositivo(codigo);
    if (affectedRows > 0) {
      return {
        message: "Dispositivo borrado correctamente",
        salida: "Dispositivo borrado correctamente"
      };
    } else {
      throw {
        message: "No se encontró el dispositivo para borrar",
        salida: "No se encontró el dispositivo para borrar"
      };
    }
  } catch (error) {
    throw {
      message: error.message,
      salida: error.message
    };
  }
};

/**
 * Consulta un dispositivo.
 *
 * codigo Integer Código del dispositivo
 * wSKey String Clave de autenticación WSKey
 * returns Dispositivo
 **/
exports.consultarDispositivo = async function(codigo, wSKey) {
  try {
    await utils.validarWSKey(wSKey);

    const row = await dispositivosRepository.consultarDispositivo(codigo);
    if (row) {
      return {
        id: row.id,
        codigo: row.codigo,
        descripcion: row.descripcion,
        salida: "Dispositivo consultado correctamente"
      };
    } else {
      throw {
        status: 404,
        message: "Dispositivo no encontrado",
        salida: "Dispositivo no encontrado"
      };
    }
  } catch (error) {
    throw {
      status: 404,
      message: error.message,
      salida: error.message
    };
  }
};

/**
 * Modifica un dispositivo existente.
 *
 * body Dispositivo 
 * wSKey String Clave de autenticación WSKey
 * returns inline_response_200
 **/
exports.modificarDispositivo = async function(body, wSKey) {
  try {
    await utils.validarWSKey(wSKey);

    const affectedRows = await dispositivosRepository.modificarDispositivo(body);
    if (affectedRows > 0) {
      return {
        message: "Dispositivo modificado correctamente",
        status: 200,
        salida: "Dispositivo modificado correctamente"
      };
    } else {
      return {
        message: "No se encontró el dispositivo para modificar",
        status: 404,
        salida: "No se encontró el dispositivo para modificar"
      };
    }
  } catch (error) {
    throw {
      message: error.message,
      status: 404,
      salida: error.message
    };
  }
};

/**
 * Crea un nuevo dispositivo.
 *
 * body Dispositivo 
 * wSKey String Clave de autenticación WSKey
 * returns Dispositivo
 **/
exports.nuevoDispositivo = async function(body, wSKey) {
  try {
    await utils.validarWSKey(wSKey);

    await dispositivosRepository.insertarDispositivo(body);
    let dispositivoInsertado = await dispositivosRepository.consultarDispositivo(body.codigo);
    return {
      ...dispositivoInsertado,
      salida: "Dispositivo insertado correctamente"
    };
  } catch (error) {
    throw {
      status: 404,
      message: error.message,
      salida: error.message
    };
  }
};
