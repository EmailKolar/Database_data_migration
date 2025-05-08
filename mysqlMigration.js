import mysql from 'mysql2/promise';
import { Client } from 'pg'
 
const psqlClient = new Client({
  user: 'postgres_user',
  password: 'postgres_password',
  host: 'localhost',
  port: 5433,
  database: 'postgres_demo',
})



// Create the connection to database
const mysqlConnection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'mysql_user',
    password: 'mysql_password',
    database: 'mysql_demo',
    port: 3309
  });

async function migrateData() {

    try{
        await psqlClient.connect();
        
    }

  

    const pgQuery = "SELECT * FROM movies";




}