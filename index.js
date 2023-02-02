import ProductManager from './manager/ProductManager.js'

const pm = new ProductManager();

const productManager = async() => {
    pm.getProducts()

    pm.addProduct(
        "S21 ULTRA",
        "12GB RAM, 256GB",
        800,
        "https://articulo.mercadolibre.com.ar/MLA-1319811739-samsung-galaxy-s22-ultra-5g-256-gb-black-12-gb-_JM#position=2&search_layout=stack&type=item&tracking_id=77c09950-aa54-496b-940a-5dbe20d872cc",
        888,
        3,
      ),
      pm.addProduct(
        'Iphone 13',
        '256gb Ram valor en doalres',
        1000,
        "https://www.mercadolibre.com.ar/apple-iphone-13-256-gb-azul-medianoche/p/MLA18500858?pdp_filters=category:MLA1055#searchVariation=MLA18500858&position=5&search_layout=stack&type=product&tracking_id=951698a1-e13c-4e3e-8886-8665a25278f2",
        999,
        12,
      ),
      pm.addProduct(
        'Motorola Edge 30 NEO',
        '8GN RAM, 128GN Almacenamiento',
        110000,
        'https://www.mercadolibre.com.ar/motorola-edge-30-128-gb-plata-opalo-8-gb-ram/p/MLA19460873?pdp_filters=category:MLA1055%7Cofficial_store:1348#searchVariation=MLA19460873&position=1&search_layout=grid&type=product&tracking_id=b9455928-52f0-43d1-ac4e-8c53462d9d97' ,
        777,
        4
      ),
  
      

    console.log(pm.getProducts());
    console.log(pm.getProductById(1));
    console.log(pm.getProductById(2));
    console.log(pm.getProductById(3));
    console.log(pm.deleteProduct(2));
    console.log(pm.updateProduct(1))
}

productManager();