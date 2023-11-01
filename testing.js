const ProductManager = require("./ProductManager");

const productManager = new ProductManager("./productos.json");

const products = productManager.getProducts();

const newProduct = {
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};
productManager.addProduct(newProduct);
