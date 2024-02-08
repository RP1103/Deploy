const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  product: 'root',
  password: 'root',
  database: 'test'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
