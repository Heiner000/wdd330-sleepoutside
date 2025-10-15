import {
  getLocalStorage,
  setLocalStorage,
  setClickMultiple,
  loadHeaderFooter,
} from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // add event listners to remove buttons after rendering
  addRemoveListeners();
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1  <span class="cart-remove" data-id="${item.Id}">&times;</span></p>
  <p class="cart-card__price">$${item.FinalPrice}</p>

</li>`;

  return newItem;
}

function removeFromCart(productId) {
  let cartItems = getLocalStorage("so-cart") || [];

  // filter out item w/ product id
  cartItems = cartItems.filter((item) => item.Id !== productId);

  // save updated cart back to localStorage
  setLocalStorage("so-cart", cartItems);

  // re-render cart
  renderCartContents();
}

function addRemoveListeners() {
  setClickMultiple(".cart-remove", (productId) => {
    removeFromCart(productId);
  });
}

renderCartContents();
