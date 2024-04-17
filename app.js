const fs = require('fs');

const userName = 'Elias'
const userLastName = 'Domínguez'

fs.writeFile('user-data.txt', 'Nombre: ' + userName + '\nApellido: ' + userLastName, (err)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log("File created");
});