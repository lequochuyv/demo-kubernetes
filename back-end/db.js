const express = require('express')
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.MYSQL_HOST_SERVICE,
    port: process.env.PORT_MYSQL,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

module.exports = db