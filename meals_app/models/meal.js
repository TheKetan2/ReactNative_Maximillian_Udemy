export default class Meal {
  constructor(
    id,
    categories,
    title,
    affordablility,
    complexity,
    imgURL,
    duration,
    ingredients,
    steps,
    isGlutinFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categories = categories;
    this.title = title;
    this.affordablility = affordablility;
    this.complexity = complexity;
    this.imgURL = imgURL;
    (this.duration = duration), (this.ingredients = ingredients);
    this.steps = steps;
    this.isGlutinFree = isGlutinFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}
