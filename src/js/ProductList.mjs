import { renderListWithTemplate } from "./utils.mjs";

// template for one product card
function productCardTemplate(product) {
  return `
    <li class="product-card">
      <a href="product.html?product=${product.Id}">
        <img src="${product.Image}" alt="Image of ${product.NameWithoutBrand}">
        <h2 class="card__brand">${product.Brand.Name}</h2>
        <h3 class="card__name">${product.NameWithoutBrand}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>`;
}

export default class ProductList {
  constructor(category, listElement) {
    this.category = category;
    this.listElement = listElement;
  }

  renderList(list) {
    // use the shared util function
    renderListWithTemplate(productCardTemplate, this.listElement, list, "afterbegin", true);
  }
}
