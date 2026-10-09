import { notFound } from "next/navigation";
import { RecipeDetail } from "./_components/RecipeDetail";
import { mockRecipes } from "./recipe.mock";

type RecipePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipePage({
  params,
}: RecipePageProps) {
  const { id } = await params;
  const recipe = mockRecipes[id];

  if (!recipe) {
    notFound();
  }

  return <RecipeDetail recipe={recipe} />;
}
