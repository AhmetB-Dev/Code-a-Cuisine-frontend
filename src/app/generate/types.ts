export type IngredientUnit =
  | "gram"
  | "kilogram"
  | "piece"
  | "milliliter"
  | "liter";

export type Ingredient = {
  id: string;
  name: string;
  amount: number;
  unit: IngredientUnit;
};

export type CookingTime = "quick" | "medium" | "complex";

export type Cuisine =
  | "german"
  | "italian"
  | "indian"
  | "japanese"
  | "gourmet"
  | "fusion";

export type Diet = "vegetarian" | "vegan" | "keto" | "none";

export type GeneratorPreferences = {
  portions: number;
  peopleCooking: number;
  cookingTime: CookingTime;
  cuisine: Cuisine;
  diet: Diet;
};
