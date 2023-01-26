import fs from 'fs'

import ProductManager from './manager/ManagerUsuarios.js'

const producManager= new ProductManager();

const productManager = async() => {
    let usuarios = await producManager.consultarProducto();
    console.log(usuarios)

    const user = {
        nombre: 'Fermin',
        apellido: 'Garcia',
        edad: 22,
        curso: 'Backend - Coderhouse'
    };

    await producManager.addProduct(user);

    usuarios= await producManager.consultarProducto();

    console.log(usuarios)
}
fs.unlinkSync('./user.txt')
productManager();