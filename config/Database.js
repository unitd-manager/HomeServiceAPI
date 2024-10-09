var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'homeservices',
    password: '0d69cdcf5387d8',
    database: 'homeservices'
});
db.connect(); 
module.exports = db;

