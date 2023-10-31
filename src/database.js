import mysqlConnection from "mysql2/promise";

const porperties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api-rest'
};

export const pool = mysqlConnection.createPool(porperties);