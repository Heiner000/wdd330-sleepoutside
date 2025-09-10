import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // 1st Step. Getting the current cart (or empty array assuming nothing is stored yet)
  let cart = getLocalStorage("so-cart") || [];
  // 2nd step. Adding the new product to the array
  cart.push(product);
  // 3rd step. Saving the updated cart back into localStorage
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
