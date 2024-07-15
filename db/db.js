const mySql = require('mysql2');
const connection = mySql.createConnection(
    {
        host : 'localhost',
        user: 'root',
        password: '',
        database: 'usuar_db'
    });


    connection.connect((err) =>
    {
        if(err)
        {
            console.error("Error conectando a la base de datos",err);
            return;
        }


        console.log("Conectado a la base de datos");


        connection.query('CREATE DATABASE IF NOT EXISTS usuar_db', (err,results) =>
        {
            if(err)
            {
                console.log("Error creando la base de datos");
                return;
            }


            console.log("Base de datos asegurada");


            connection.changeUser({database : 'usuar_db'}, (err)=>
            {
                if(err)
                {
                    console.error("Error al cambiar a usuar_db",err);
                    return;
                }



            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS usuar_db (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    apellido VARCHAR(100) NOT NULL,
                    mail VARCHAR(255) NOT NULL
                );            
            `;


            connection.query(createTableQuery,(err,results) =>
            {
                if(err)
                {
                    console.log("Error creando la tabla: " , err);
                    return;
                }


                console.log("Tabla asegurada");
            });
        });


    });


});


module.exports = connection;