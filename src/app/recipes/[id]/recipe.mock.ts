export type RecipeIngredient = {
  amount: string;
  name: string;
};

export type RecipeDirection = {
  title: string;
  description: string;
  chef: 1 | 2;
};

export type RecipeDetailData = {
  id: string;
  title: string;
  cookingTime: number;
  chefs: number[];
  nutrition: {
    energy: string;
    protein: string;
    fat: string;
    carbs: string;
  };
  tags: string[];
  likes: number;
  yourIngredients: RecipeIngredient[];
  extraIngredients: RecipeIngredient[];
  directions: RecipeDirection[];
};

const pastaRecipe: RecipeDetailData = {
  id: "1",
  title: "Pasta with spinach and cherry tomatoes",
  cookingTime: 20,
  chefs: [1, 2],
  nutrition: {
    energy: "630 kcal",
    protein: "18g",
    fat: "24g",
    carbs: "58g",
  },
  tags: ["Vegetarian", "Quick"],
  likes: 66,
  yourIngredients: [
    { amount: "80g", name: "Pasta noodles" },
    { amount: "100g", name: "Baby spinach" },
    { amount: "150g", name: "Cherry tomatoes" },
    { amount: "1 piece", name: "Egg" },
  ],
  extraIngredients: [
    { amount: "40g", name: "Parmesan cheese" },
    { amount: "30ml", name: "Olive oil" },
    { amount: "", name: "Herbs (dry basil, oregano, garlic)" },
  ],
  directions: [
    {
      title: "Cook the pasta",
      chef: 1,
      description:
        "Cook your noodles in boiling, salted water, until the pasta is al dente. Drain the pasta and reserve some of the pasta water.",
    },
    {
      title: "Make the sauce",
      chef: 2,
      description:
        "While the pasta is cooking, heat olive oil in a pan over medium heat. Add the garlic, and sauté until it starts to turn golden. Add the tomatoes, oregano, salt, and pepper, and cook for 3-4 minutes.",
    },
    {
      title: "Finish the pasta",
      chef: 1,
      description:
        "Add the noodles to the sauce, then add pasta water until the sauce is the right consistency. Simmer for 1 minute, then add the spinach, basil, chili flakes, and parmesan.",
    },
    {
      title: "Finish the dish",
      chef: 2,
      description:
        "Lower the heat to low, stir until mixed, and remove from the heat. Season to taste, top with parmesan cheese, and enjoy.",
    },
  ],
};

export const mockRecipes: Record<string, RecipeDetailData> = {
  "1": pastaRecipe,
  "2": {
    ...pastaRecipe,
    id: "2",
    title: "Creamy garlic shrimp pasta",
    cookingTime: 22,
    tags: ["Italian", "Medium"],
    likes: 51,
  },
  "3": {
    ...pastaRecipe,
    id: "3",
    title: "Pasta alla Trapanese (Sicilian Tomato Pesto)",
    cookingTime: 20,
    tags: ["Italian", "Quick"],
    likes: 43,
  },
};
