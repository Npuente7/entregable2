const ProductManager = require("./ProductManager");

const productManager = new ProductManager("/productos.json");

const newProduct = {
  title: "Nuevo Producto",
  description: "Descripción del nuevo producto",
  price: 19.99,
  thumbnail: "imagen.jpg",
  code: "ABC123",
  stock: 10,
};
productManager.addProduct(newProduct);

const allProducts = productManager.getProducts();
console.log(allProducts);

const productById = productManager.getProductById(1);
console.log(productById);

const updatedProduct = {
  title: "Producto Actualizado",
  description: "Nueva descripción",
  price: 29.99,
  thumbnail: "nueva_imagen.jpg",
  code: "XYZ789",
  stock: 5,
};
productManager.updateProduct(1, updatedProduct);

productManager.deleteProduct(1);

const newProduct = {
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};
productManager.addProduct(newProduct);
