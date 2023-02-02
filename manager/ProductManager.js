import fs from 'fs'

const path = './files/Products.json'

export default class ProductManager {
    gananciasImpuesto = 0.75;
    products;
  
    constructor() {
      this.products = [];
    }
  
    getProducts = async() => {
        try{
            if(fs.existsSync(path)){
                const data = await fs.promises.readFile(path, 'utf-8');
                const products = JSON.parse(path);
            return products;
            }else{
                return[];
            }
            
        }catch(error){
            console.log(error)
        }
    }

    addProduct = async (title, description, price, thumbnail, code, stock,) => {
      const product = {
        title,
        description,
        price: price + price * this.gananciasImpuesto,
        thumbnail,
        code,
        stock,
      };
  
      const productcode = this.products.find((el) => el.code === code);
  
      if (productcode) {
        return "duplicated product code";
      }
  
      if (this.products.length == 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
  
       this.products.push(product);
       
      await fs.promises.writeFile(path, JSON.stringify(this.products, null, '\t'));
    };
  
    getProductById = (idProduct) => {

      const productIndex = this.products.findIndex((e) => e.id === idProduct);
      
      if (productIndex === -1) {
      
      console.log('not found');
      
      return;
      
      }
      
      return this.products[productIndex];
      
      };


    deleteProduct = async (idProduct) => {
        const products = this.getProducts();
        const productsActualizado = this.products.filter(p=>p.id !== idProduct)
        await fs.promises.writeFile(path, JSON.stringify(productsActualizado, null, '\t'))
    }

     updateProduct = (idProduct, values) => {
      const productIndex = products.findIndex(p => p.id === idProduct);
       if(productIndex === -1){
        throw new Error('product not found');
       }
       products[productIndex] = { ...products[productIndex],...values, id: idProduct}
       return products;
      }
  }
