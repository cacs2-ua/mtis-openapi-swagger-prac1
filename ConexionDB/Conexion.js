const mysql = require('mysql');

// Configuración de la conexión a la base de datos.
// Asegúrate de ajustar estos valores según la configuración de tu entorno.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // Cambia por tu usuario de MySQL
  password: 'root',   // Cambia por tu contraseña de MySQL
  database: 'edificio_inteligente'     // Cambia por el nombre de tu base de datos
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL establecida.');
});

/**
 * Función para insertar un nuevo nivel en la base de datos.
 * 
 * Esta función recibe un objeto que representa el nivel a insertar, el cual
 * debe tener las propiedades "nivel" (número) y "descripcion" (cadena de texto).
 * 
 * @param {Object} nivelData - Objeto con la información del nivel.
 * @param {number} nivelData.nivel - Valor del nivel.
 * @param {string} nivelData.descripcion - Descripción del nivel.
 * @returns {Promise<number>} - Promesa que resuelve con el ID del registro insertado.
 */
function insertarNivel(nivelData) {
  return new Promise((resolve, reject) => {
    const { nivel, descripcion } = nivelData;
    const query = 'INSERT INTO niveles (nivel, descripcion) VALUES (?, ?)';
    
    connection.query(query, [nivel, descripcion], (error, results) => {
      if (error) {
        console.error('Error al insertar el nivel:', error);
        return reject(error);
      }
      console.log('Nivel insertado correctamente con ID:', results.insertId);
      resolve(results.insertId);
    });
  });
}

module.exports = {
  connection,
  insertarNivel
};
