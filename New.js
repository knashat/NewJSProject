const products = [
  {
    name: "Pepsi",
    quantity: 15,
    type: "unit"
  },
  {
    name: "coffee",
    quantity: 20,
    type: "cups"
  }
];

function getProducts(a) {
  console.log(a);
}
getProducts(products);

function addNewProduct(NewProduct, NewQuantity, NewType) {
  products.push({
    name: NewProduct,
    quantity: NewQuantity,
    type: NewType
  });
  console.log(products);
}

addNewProduct("Chocolate", 10, "bars");

function UpdateQuantity(ProductIndex, NQuantity) {
  products[ProductIndex].quantity = NQuantity;
  console.log(products);
}
UpdateQuantity(0, 17);
