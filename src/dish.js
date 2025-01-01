export class Dish {
  constructor(name, desc, price) {
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
}

const brusselSprouts = new Dish(
  "Roasted Brussel Sprouts",
  "Roasted brussel sprouts with a balsamic vinegarette drizzle",
  "12.99"
);

const crabPuffs = new Dish(
  "Crab Puffs",
  "5 mini jumbo lump crab cakes",
  "17.99"
);

export const dishes = [brusselSprouts, crabPuffs];
