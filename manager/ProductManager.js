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
            if(fs.existsSync(this.path)){
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
        const productsU = await this.getProducts();
        const productsActualizado = await productsU.filter(products=>products.id != idProduct)
        await fs.promises.writeFile(path, JSON.stringify(productsU, null, '\t'))
        console.log('producto eliminado') 
    }

    updateProduct = async ({idProduct, ...products}) => {
      await this.deleteProduct(idProduct);
      let productOld = await this.getProducts()
      console.log(productOld)
      let prodModificado = [
        {idProduct, ...products},
          ...productOld
      ];
      await fs.promises.writeFile(path, JSON.stringify(prodModificado, null, '\t'))
    };
  }
    


  
      
