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
  },

  {
    name: "tomato",
    quantity: 30,
    type: "Kilo"
  }
];

function getProducts(a) {
  const productCopy = [...products];
  console.log(productCopy);
}
getProducts();

function valString(text) {
  if (typeof text !== "string") {
    throw new Error(`"${text}" is not a valid string!`);
  }
}

function valNumber(number) {
  if (typeof number !== "number") {
    throw new Error(`"${number}" is not a valid number!`);
  }
}

function addNewProduct(newProduct, newQuantity, newType) {
  valString(newProduct);
  valString(newType);
  valNumber(newQuantity);
  products.push({
    name: newProduct,
    quantity: newQuantity,
    type: newType
  });
  console.log(products);
}

addNewProduct("chocolate", 10, "bars");

function UpdateQuantity(productName, nQuantity) {
  valString(productName);
  valNumber(nQuantity);
  let i;
  for (i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      products[i].quantity = nQuantity;
      return console.log(products);
    }
  }
}
UpdateQuantity("tomato", 45);
