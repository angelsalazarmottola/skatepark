const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'programadores',
    password: '1309',
    port: 5432,
});