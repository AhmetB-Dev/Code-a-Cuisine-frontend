"use client";

import { type FormEvent, useState } from "react";
import type { Ingredient, IngredientUnit } from "../types";

type IngredientStepProps = {
  ingredients: Ingredient[];
  onAddIngredient: (ingredient: Ingredient) => void;
  onRemoveIngredient: (id: string) => void;
  onNext: () => void;
};

export function IngredientStep({
  ingredients,
  onAddIngredient,
  onRemoveIngredient,
  onNext,
}: IngredientStepProps) {
  const [ingredientName, setIngredientName] = useState("");
  const [amount, setAmount] = useState(100);
  const [unit, setUnit] = useState<IngredientUnit>("gram");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = ingredientName.trim();

    if (!name || amount <= 0) {
      return;
    }

    const ingredient: Ingredient = {
      id: crypto.randomUUID(),
      name,
      amount,
      unit,
    };

    onAddIngredient(ingredient);
    setIngredientName("");
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <header>
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight text-[#174d20]">
          Generate recipe
        </h1>

        <p className="mt-5 max-w-3xl text-[clamp(1.1rem,2.5vw,1.75rem)] leading-snug text-[#174d20]">
          Got random stuff in your kitchen?
          <br />
          Pop it in—we&apos;ve got the perfect recipe waiting.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-[#c5d2c5] p-6 sm:p-8"
        >
          <label
            htmlFor="ingredient"
            className="block text-xl text-[#174d20]"
          >
            Ingredient
          </label>

          <input
            id="ingredient"
            name="ingredient"
            type="text"
            value={ingredientName}
            onChange={(event) => setIngredientName(event.target.value)}
            className="mt-4 min-h-14 w-full rounded-full bg-[#f5efe4] px-6 text-[#174d20] outline-none focus-visible:ring-2 focus-visible:ring-[#174d20]"
          />

          <fieldset className="mt-8">
            <legend className="text-xl text-[#174d20]">Serving size</legend>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <label htmlFor="amount" className="sr-only">
                Amount
              </label>

              <input
                id="amount"
                name="amount"
                type="number"
                min={1}
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
                className="h-14 w-28 rounded-full bg-[#f5efe4] px-5 text-center text-lg text-[#174d20]"
              />

              <label htmlFor="unit" className="sr-only">
                Unit
              </label>

              <select
                id="unit"
                name="unit"
                value={unit}
                onChange={(event) =>
                  setUnit(event.target.value as IngredientUnit)
                }
                className="h-14 rounded-full bg-[#f5efe4] px-5 text-lg text-[#174d20]"
              >
                <option value="gram">gram</option>
                <option value="kilogram">kg</option>
                <option value="piece">piece</option>
                <option value="milliliter">ml</option>
                <option value="liter">liter</option>
              </select>

              <button
                type="submit"
                aria-label="Add ingredient"
                className="grid size-14 place-items-center rounded-full text-4xl text-[#174d20] transition hover:bg-[#b5c6b5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174d20]"
              >
                +
              </button>
            </div>
          </fieldset>
        </form>

        <section
          aria-labelledby="ingredient-list-title"
          className="min-h-64 rounded-[2rem] bg-[#c5d2c5] p-6 sm:p-8"
        >
          <h2
            id="ingredient-list-title"
            className="text-xl text-[#174d20]"
          >
            List of your Ingredients
          </h2>

          {ingredients.length === 0 ? (
            <p className="mt-6 text-[#174d20]/70">
              No ingredients added yet.
            </p>
          ) : (
            <ul className="mt-6 space-y-3">
              {ingredients.map((ingredient) => (
                <li
                  key={ingredient.id}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-[#174d20]">
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </span>

                  <button
                    type="button"
                    onClick={() => onRemoveIngredient(ingredient.id)}
                    aria-label={`Remove ${ingredient.name}`}
                    className="px-2 text-xl text-[#174d20]"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          disabled={ingredients.length === 0}
          className="min-h-11 bg-[#315f35] px-6 py-3 font-medium text-white transition hover:bg-[#274d2b] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next step
        </button>
      </div>
    </section>
  );
}
