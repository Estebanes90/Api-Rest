import mysqlConnection from "mysql2/promise";

const porperties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burguener_r'
};

export const pool = mysqlConnection.createPool(porperties);
