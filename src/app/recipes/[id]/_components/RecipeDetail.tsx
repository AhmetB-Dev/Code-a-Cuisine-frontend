"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { RecipeDetailData } from "../recipe.mock";

type RecipeDetailProps = {
  recipe: RecipeDetailData;
};

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  const router = useRouter();
  const [showIngredients, setShowIngredients] = useState(true);
  const [showDirections, setShowDirections] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-5 px-5 pb-4 pt-5 sm:px-8">
          <Link
            href="/"
            aria-label="Code à Cuisine – Startseite"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315f35]"
          >
            <Image
              src="/assets/img/logo-green.svg"
              alt="Code à Cuisine"
              width={95}
              height={32}
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Zurück"
            className="grid size-10 place-items-center rounded-full transition hover:bg-[#eef2ec] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315f35]"
          >
            <Image
              src="/assets/icons/arrow-left.svg"
              alt=""
              width={28}
              height={28}
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      <main className="bg-white px-4 pb-10 sm:px-6">
        <article className="mx-auto w-full max-w-5xl overflow-hidden rounded-[1.5rem] border-2 border-[#f4e3d1] bg-[#fffdf9]">
          <section className="m-2 rounded-[1.25rem] bg-[#fff1e4] p-5 text-[#174d20] sm:m-3 sm:p-7">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Image
                src="/assets/icons/clock.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
              <span>Cooking time: {recipe.cookingTime}min</span>
            </div>

            <h1 className="mt-3 max-w-3xl text-[clamp(1.6rem,5vw,2.8rem)] font-medium leading-tight">
              {recipe.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
              {recipe.chefs.map((chef) => (
                <span
                  key={chef}
                  className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm ${
                    chef === 1
                      ? "bg-[#dce6de]"
                      : "bg-[#ffd8ae]"
                  }`}
                >
                  <Image
                    src={
                      chef === 1
                        ? "/assets/icons/chef-hat.svg"
                        : "/assets/icons/spatula-spoon-crossed.svg"
                    }
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />
                  Chef {chef}
                </span>
              ))}
            </div>

            <div className="mt-9">
              <h2 className="text-sm font-medium">
                Nutritional information
              </h2>

              <dl className="mt-3 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4">
                <NutritionItem
                  label="Energie"
                  value={recipe.nutrition.energy}
                />
                <NutritionItem
                  label="Protein"
                  value={recipe.nutrition.protein}
                />
                <NutritionItem
                  label="Fat"
                  value={recipe.nutrition.fat}
                />
                <NutritionItem
                  label="Carbs"
                  value={recipe.nutrition.carbs}
                />
              </dl>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#d9dfd1] px-3 py-1 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}

              <span className="inline-flex items-center gap-1 rounded-full bg-[#d9dfd1] px-3 py-1 text-xs sm:text-sm">
                <Image
                  src="/assets/icons/heart-filled.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                />
                {recipe.likes}
              </span>
            </div>
          </section>

          <section className="px-3 pb-8 pt-5 sm:px-8">
            <SectionDivider
              mobileSrc="/assets/img/ingredients-divider-mobile.png"
              desktopSrc="/assets/img/ingredients-divider-desktop.png"
            />

            <h2 className="sr-only">Ingredients</h2>

            {showIngredients && (
              <div className="mx-auto mt-7 max-w-3xl text-[#174d20]">
                <IngredientGroup
                  title="Your ingredients"
                  ingredients={recipe.yourIngredients}
                />

                <div className="mt-7">
                  <IngredientGroup
                    title="Extra ingredients"
                    ingredients={recipe.extraIngredients}
                  />
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setShowIngredients((current) => !current)
                }
                aria-expanded={showIngredients}
                className="min-h-11 px-4 text-sm font-medium text-[#315f35]"
              >
                {showIngredients
                  ? "Hide ingredients ▲"
                  : "Show ingredients ▼"}
              </button>
            </div>
          </section>

          <section className="px-3 pb-8 pt-2 sm:px-8">
            <SectionDivider
              mobileSrc="/assets/img/directions-divider-mobile.png"
              desktopSrc="/assets/img/directions-divider-desktop.png"
            />

            <h2 className="sr-only">Directions</h2>

            {showDirections && (
              <ol className="mx-auto mt-7 max-w-3xl space-y-7 text-[#174d20]">
                {recipe.directions.map((direction, index) => (
                  <li key={`${direction.title}-${index}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#fff1e4] text-sm font-semibold">
                        {index + 1}.
                      </span>

                      <h3 className="mr-auto text-base font-semibold sm:text-lg">
                        {direction.title}
                      </h3>

                      <ChefBadge chef={direction.chef} />
                    </div>

                    <p className="mt-3 pl-11 text-sm leading-relaxed sm:text-base">
                      {direction.description}
                    </p>
                  </li>
                ))}
              </ol>
            )}

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setShowDirections((current) => !current)
                }
                aria-expanded={showDirections}
                className="min-h-11 px-4 text-sm font-medium text-[#315f35]"
              >
                {showDirections
                  ? "Hide directions ▲"
                  : "Show directions ▼"}
              </button>
            </div>

            <div className="mx-auto mt-9 flex max-w-3xl items-end justify-between gap-5">
              <div>
                <p className="font-semibold text-[#174d20]">
                  Just finished this meal?
                </p>
                <p className="mt-1 max-w-sm text-sm leading-relaxed text-[#315f35]">
                  Give it a heart, so that the others know this is
                  delicious.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsLiked((current) => !current)}
                aria-pressed={isLiked}
                aria-label={
                  isLiked
                    ? "Remove recipe from favorites"
                    : "Like this recipe"
                }
                className="grid size-14 shrink-0 place-items-center rounded-full"
              >
                <Image
                  src={
                    isLiked
                      ? "/assets/icons/heart-filled.svg"
                      : "/assets/icons/heart-outline-green.svg"
                  }
                  alt=""
                  width={38}
                  height={38}
                  aria-hidden="true"
                />
              </button>
            </div>
          </section>
        </article>

        <aside className="mx-auto mt-8 flex w-full max-w-5xl flex-col gap-4 rounded-[1.25rem] bg-[#edf1eb] p-5 text-[#174d20] sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed sm:text-base">
            Find inspiration for your next culinary adventure!
          </p>

          <Link
            href="/cookbook"
            className="inline-flex min-h-11 items-center justify-center bg-[#315f35] px-6 py-3 font-medium text-white transition hover:bg-[#274d2b]"
          >
            Cookbook
          </Link>
        </aside>
      </main>
    </>
  );
}

type NutritionItemProps = {
  label: string;
  value: string;
};

function NutritionItem({
  label,
  value,
}: NutritionItemProps) {
  return (
    <div>
      <dt className="text-xs font-semibold sm:text-sm">{label}</dt>
      <dd className="mt-1 text-sm sm:text-base">{value}</dd>
    </div>
  );
}

type IngredientGroupProps = {
  title: string;
  ingredients: {
    amount: string;
    name: string;
  }[];
};

function IngredientGroup({
  title,
  ingredients,
}: IngredientGroupProps) {
  return (
    <div>
      <h3 className="font-semibold text-[#16872a]">{title}</h3>

      <ul className="mt-3 space-y-1 text-sm sm:text-base">
        {ingredients.map((ingredient) => (
          <li
            key={`${ingredient.amount}-${ingredient.name}`}
            className="grid grid-cols-[4.5rem_1fr] gap-2"
          >
            <span>
              {ingredient.amount ? `• ${ingredient.amount}` : "•"}
            </span>
            <span>{ingredient.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ChefBadgeProps = {
  chef: 1 | 2;
};

function ChefBadge({ chef }: ChefBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs sm:text-sm ${
        chef === 1 ? "bg-[#dce6de]" : "bg-[#ffd8ae]"
      }`}
    >
      <Image
        src={
          chef === 1
            ? "/assets/icons/chef-hat.svg"
            : "/assets/icons/spatula-spoon-crossed.svg"
        }
        alt=""
        width={16}
        height={16}
        aria-hidden="true"
      />
      Chef {chef}
    </span>
  );
}

type SectionDividerProps = {
  mobileSrc: string;
  desktopSrc: string;
};

function SectionDivider({
  mobileSrc,
  desktopSrc,
}: SectionDividerProps) {
  return (
    <>
      <Image
        src={mobileSrc}
        alt=""
        width={320}
        height={90}
        className="mx-auto h-auto w-full max-w-md md:hidden"
      />
      <Image
        src={desktopSrc}
        alt=""
        width={1152}
        height={148}
        className="mx-auto hidden h-auto w-full md:block"
      />
    </>
  );
}
