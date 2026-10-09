"use client";

import { useState } from "react";

import type {
  GeneratorPreferences,
  Ingredient,
} from "../types";

import { GenerationErrorModal } from "./GenerationErrorModal";
import { IngredientStep } from "./IngredientStep";
import { LoadingStep } from "./LoadingStep";
import { PreferencesStep } from "./PreferencesStep";
import { ResultsStep } from "./ResultsStep";

type GeneratorStep =
  | "ingredients"
  | "preferences"
  | "loading"
  | "results";

type GenerationResult =
  | "success"
  | "insufficient-ingredients";

const MOCK_GENERATION_DELAY_MS = 3000;

// Change this temporarily to "insufficient-ingredients" to test the error popup.
const MOCK_GENERATION_RESULT: GenerationResult = "success";

const initialPreferences: GeneratorPreferences = {
  portions: 2,
  peopleCooking: 1,
  cookingTime: "quick",
  cuisine: "german",
  diet: "none",
};

async function generateRecipesMock(): Promise<GenerationResult> {
  await new Promise<void>((resolve) => {
    window.setTimeout(resolve, MOCK_GENERATION_DELAY_MS);
  });

  return MOCK_GENERATION_RESULT;
}

export function GenerateFlow() {
  const [step, setStep] = useState<GeneratorStep>("ingredients");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [preferences, setPreferences] =
    useState<GeneratorPreferences>(initialPreferences);

  const [showGenerationError, setShowGenerationError] =
    useState(false);

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

  async function handleGenerate() {
    setShowGenerationError(false);
    setStep("loading");

    const result = await generateRecipesMock();

    if (result === "insufficient-ingredients") {
      setStep("preferences");
      setShowGenerationError(true);
      return;
    }

    setStep("results");
  }

  function handleBackToIngredients() {
    setShowGenerationError(false);
    setStep("ingredients");
  }

  let content;

  if (step === "loading") {
    content = <LoadingStep />;
  } else if (step === "results") {
    content = (
      <ResultsStep
        onGenerateAgain={() => setStep("ingredients")}
      />
    );
  } else if (step === "preferences") {
    content = (
      <PreferencesStep
        preferences={preferences}
        onPreferencesChange={setPreferences}
        onBack={() => setStep("ingredients")}
        onGenerate={handleGenerate}
      />
    );
  } else {
    content = (
      <IngredientStep
        ingredients={ingredients}
        onAddIngredient={handleAddIngredient}
        onRemoveIngredient={handleRemoveIngredient}
        onNext={() => setStep("preferences")}
      />
    );
  }

  return (
    <>
      {content}

      {showGenerationError && (
        <GenerationErrorModal
          onClose={() => setShowGenerationError(false)}
          onBackToIngredients={handleBackToIngredients}
        />
      )}
    </>
  );
}
