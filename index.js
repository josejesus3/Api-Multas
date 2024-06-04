const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3306;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'multas'
});


// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Ruta para obtener todos los elementos de la base de datos
app.get('/registros', (req, res) => {
  connection.query('SELECT * FROM registros', (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
