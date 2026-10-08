"use client";

import { useState } from "react";
import type { GeneratorPreferences, Ingredient } from "../types";
import { IngredientStep } from "./IngredientStep";
import { PreferencesStep } from "./PreferencesStep";

type GeneratorStep = "ingredients" | "preferences";

const initialPreferences: GeneratorPreferences = {
  portions: 2,
  peopleCooking: 1,
  cookingTime: "quick",
  cuisine: "german",
  diet: "none",
};

export function GenerateFlow() {
  const [step, setStep] = useState<GeneratorStep>("ingredients");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [preferences, setPreferences] =
    useState<GeneratorPreferences>(initialPreferences);

  function handleAddIngredient(ingredient: Ingredient) {
    setIngredients((currentIngredients) => [
      ...currentIngredients,
      ingredient,
    ]);
  }

  function handleRemoveIngredient(id: string) {
    setIngredients((currentIngredients) =>
      currentIngredients.filter((ingredient) => ingredient.id !== id),
    );
  }

  if (step === "preferences") {
    return (
      <PreferencesStep
        preferences={preferences}
        onPreferencesChange={setPreferences}
        onBack={() => setStep("ingredients")}
      />
    );
  }

  return (
    <IngredientStep
      ingredients={ingredients}
      onAddIngredient={handleAddIngredient}
      onRemoveIngredient={handleRemoveIngredient}
      onNext={() => setStep("preferences")}
    />
  );
}
