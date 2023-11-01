const fs = require("fs");

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    if (!fs.existsSync(this.path)) {
      fs.writeFileSync(this.path, "[]");
    } else {
      const data = fs.readFileSync(this.path, "utf8");
      this.products = JSON.parse(data);
    }
  }

  saveProducts() {
    fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), "utf8");
  }

  addProduct(product) {
    product.id = this.products.length + 1;
    this.products.push(product);
    this.saveProducts();
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId) {
    return this.products.find((product) => product.id === productId);
  }

  updateProduct(productId, updatedProduct) {
    this.products = this.products.map((product) => {
      if (product.id === productId) {
        updatedProduct.id = productId;
        return updatedProduct;
      }
      return product;
    });
    this.saveProducts();
  }

  deleteProduct(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
    this.saveProducts();
  }
}

module.exports = ProductManager;
