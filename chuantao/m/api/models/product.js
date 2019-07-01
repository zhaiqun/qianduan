class product {
    constructor() {


    }

}


const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'itcast'

})

conn.connect();
conn.solution
conn.query('SELECT *  from  product', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});