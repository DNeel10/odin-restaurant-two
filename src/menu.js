import { Dish, dishes } from "./dish.js";

class Menu {
  constructor() {
    this.dishes = [];
  }
  addDish(dish) {
    this.dishes.push(dish);
  }
}

const menu = new Menu();

dishes.forEach((dish) => {
  menu.addDish(dish);
});

function displayMenu(menu) {
  const menuDiv = document.createElement("div");

  menu.dishes.map((dish) => {
    const itemCard = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemDesc = document.createElement("p");
    const itemPrice = document.createElement("p");

    itemName.innerText = `${dish.name}`;
    itemDesc.innerText = `${dish.desc}`;
    itemPrice.innerText = `${dish.price}`;

    itemCard.appendChild(itemName);
    itemCard.appendChild(itemDesc);
    itemCard.appendChild(itemPrice);

    menuDiv.appendChild(itemCard);
  });

  return menuDiv;
}

export { displayMenu, menu };
