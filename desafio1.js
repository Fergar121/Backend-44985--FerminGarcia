class ProductManager{
    #gananciasImpuesto = 0.75;

    constructor (){
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock)=> {
        const product = {
            title,
            description,
            price: price+price*this.#gananciasImpuesto,
            thumbnail,
            code,
            stock
        };

        if(this.products.length == 0){
            product.id = 1;
        }else {
            product.id = this.products[this.product.length - 1].id + 1;
        }

        this.products.push(product)
    }
    getProducybyId = (idProduct) => {
        const eventoIndex = this.products.findIndex(e=>e.id === idProduct);

        if (eventoIndex === -1){
            console.log('not found');
            return;
        }
    }
}

const agregadorProductos = new ProductManager();
agregadorProductos.addProduct('samsung', 's21 fe 5g', 220000, 'https://shop.samsung.com/ar/celular-galaxy-s21-fe-5g/p?skuId=131782', 1 , 8)
console.log(agregadorProductos.getProducts());