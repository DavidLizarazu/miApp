/*--------SERVIDOR ESTATICO CON EXPRESS-------*/

const express = require('express');
const app = express();
let port = 3000;

const usuariosRouter = require('./routes/usuarios');

app.use(express.json());

app.use('/usuarios',usuariosRouter);

app.get('/', (req,res) => 
{
    res.send('Hola desde el puerto:3000');
});

app.listen(port , () => 
{
    console.log(`Servidor ejecutandose en el puert ${port}`)
});