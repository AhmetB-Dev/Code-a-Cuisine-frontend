export type CuisineRecipe = {
  id: string;
  title: string;
  cookingTime: number;
  tags: string[];
  likes: number;
};

export type CuisinePageData = {
  slug: string;
  title: string;
  mobileDecoration: string;
  desktopDecoration: string;
  recipes: CuisineRecipe[];
};

const italianRecipes: CuisineRecipe[] = [
  {
    id: "1",
    title: "Pasta with spinach and cherry tomatoes",
    cookingTime: 20,
    tags: ["Vegetarian", "Quick"],
    likes: 66,
  },
  {
    id: "2",
    title: "Creamy garlic shrimp pasta",
    cookingTime: 22,
    tags: ["Quick"],
    likes: 32,
  },
  {
    id: "3",
    title: "Funghi salami pizza",
    cookingTime: 16,
    tags: ["Quick"],
    likes: 42,
  },
  {
    id: "1",
    title: "Pasta with spinach and cherry tomatoes",
    cookingTime: 20,
    tags: ["Vegetarian", "Quick"],
    likes: 66,
  },
  {
    id: "2",
    title: "Creamy garlic shrimp pasta",
    cookingTime: 22,
    tags: ["Quick"],
    likes: 32,
  },
  {
    id: "3",
    title: "Funghi salami pizza",
    cookingTime: 16,
    tags: ["Quick"],
    likes: 42,
  },
  {
    id: "1",
    title: "Pasta with spinach and cherry tomatoes",
    cookingTime: 20,
    tags: ["Vegetarian", "Quick"],
    likes: 66,
  },
  {
    id: "2",
    title: "Creamy garlic shrimp pasta",
    cookingTime: 22,
    tags: ["Quick"],
    likes: 32,
  },
  {
    id: "3",
    title: "Funghi salami pizza",
    cookingTime: 16,
    tags: ["Quick"],
    likes: 42,
  },
];

export const cuisinePages: Record<string, CuisinePageData> = {
  italian: {
    slug: "italian",
    title: "Italian cuisine",
    mobileDecoration: "/assets/img/cuisine-italian-mobile.png",
    desktopDecoration: "/assets/img/cuisine-italian-desktop.png",
    recipes: italianRecipes,
  },
  german: {
    slug: "german",
    title: "German cuisine",
    mobileDecoration: "/assets/img/cuisine-german-mobile.png",
    desktopDecoration: "/assets/img/cuisine-german-desktop.png",
    recipes: italianRecipes,
  },
  japanese: {
    slug: "japanese",
    title: "Japanese cuisine",
    mobileDecoration: "/assets/img/cuisine-japanese-mobile.png",
    desktopDecoration: "/assets/img/cuisine-japanese-desktop.png",
    recipes: italianRecipes,
  },
  gourmet: {
    slug: "gourmet",
    title: "Gourmet cuisine",
    mobileDecoration: "/assets/img/cuisine-gourmet-mobile.png",
    desktopDecoration: "/assets/img/cuisine-gourmet-desktop.png",
    recipes: italianRecipes,
  },
  indian: {
    slug: "indian",
    title: "Indian cuisine",
    mobileDecoration: "/assets/img/cuisine-card-indian.webp",
    desktopDecoration: "/assets/img/cuisine-card-indian.webp",
    recipes: italianRecipes,
  },
  fusion: {
    slug: "fusion",
    title: "Fusion cuisine",
    mobileDecoration: "/assets/img/cuisine-fusion-mobile-a.png",
    desktopDecoration: "/assets/img/cuisine-fusion-desktop-a.png",
    recipes: italianRecipes,
  },
};
