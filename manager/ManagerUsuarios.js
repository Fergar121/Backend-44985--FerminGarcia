import fs from 'fs';

const path ='./files/Products.json'

 export default class ProductManager {
    #gananciasImpuesto = 0.75;
    products;

    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    };

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price: price + price * this.#gananciasImpuesto,
            thumbnail,
            code,
            stock,
        };

        const productCode = this.products.find((el) => el.code === code);

        if (productCode) {
            return "duplicated product code";
        }

        if (this.products.length == 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    };

    getProductById = (idProduct) => {
        const productIndex = this.products.findIndex((e) => e.id === idProduct);

        if (productIndex === -1) {
            console.log("not found");
            return;
        }

        return this.products[productIndex];
    };

    consultarProducto= async() => {
        try{
            if(fs.existsSync(path)){
                const data = await fs.promises.readFile(path, 'utf-8');
                const users = JSON.parse(data);
                return users;
            }else{
                return[];
            }
        } catch(error){
            console.log(error);
        }
        
    }

    
}

const pm = new ProductManager();
console.log(pm.getProducts());
console.log(
    pm.addProduct(
        "samsung a10",
        "samsung a1', 4gb ram",
        55000,
        "https://articulo.mercadolibre.com.ar/MLA-1316662841-samsung-galaxy-a10-dual-sim-32-gb-azul-2-gb-ram-bueno-_JM#position=8&search_layout=stack&type=item&tracking_id=8576e5ee-b05e-4f23-927b-586b79b0bef0",
        11,
        13,
    )
);
console.log(pm.getProducts());
console.log(
    pm.addProduct(
        "samsung a20",
        "samsung a20', 4gb ram",
        45000,
        "https://articulo.mercadolibre.com.ar/MLA-1255880257-samsung-galaxy-a20-32-gb-negro-3-gb-ram-reacondicionado-_JM#position=14&search_layout=stack&type=item&tracking_id=5a902e81-b30c-46ad-9d45-ad2a378c0f6d",
        10,
        12
    )


);
console.log(pm.getProducts());
console.log(pm.getProductById(21));
console.log(pm.getProductById(0));

