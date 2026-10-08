"use client";

import type { Dispatch, SetStateAction } from "react";
import type {
  CookingTime,
  Cuisine,
  Diet,
  GeneratorPreferences,
} from "../types";

type PreferencesStepProps = {
  preferences: GeneratorPreferences;
  onPreferencesChange: Dispatch<SetStateAction<GeneratorPreferences>>;
  onBack: () => void;
};

const cookingTimes: {
  value: CookingTime;
  label: string;
  description: string;
}[] = [
  { value: "quick", label: "Quick", description: "up to 20min" },
  { value: "medium", label: "Medium", description: "25-40min" },
  { value: "complex", label: "Complex", description: "over 45min" },
];

const cuisines: { value: Cuisine; label: string }[] = [
  { value: "german", label: "German" },
  { value: "italian", label: "Italian" },
  { value: "indian", label: "Indian" },
  { value: "japanese", label: "Japanese" },
  { value: "gourmet", label: "Gourmet" },
  { value: "fusion", label: "Fusion" },
];

const diets: { value: Diet; label: string }[] = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "keto", label: "Keto" },
  { value: "none", label: "No preferences" },
];

export function PreferencesStep({
  preferences,
  onPreferencesChange,
  onBack,
}: PreferencesStepProps) {
  function updatePreferences(changes: Partial<GeneratorPreferences>) {
    onPreferencesChange((currentPreferences) => ({
      ...currentPreferences,
      ...changes,
    }));
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-10 text-[#174d20]">
      <button
        type="button"
        onClick={onBack}
        aria-label="Back to ingredients"
        className="mb-12 text-4xl"
      >
        ←
      </button>

      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-medium">
        Choose your preferences
      </h1>

      <div className="mt-10 space-y-8">
        <Counter
          label="How many portions you need?"
          value={preferences.portions}
          min={1}
          max={12}
          suffix="Portions"
          onChange={(portions) => updatePreferences({ portions })}
        />

        <Counter
          label="How many are cooking?"
          value={preferences.peopleCooking}
          min={1}
          max={3}
          suffix={preferences.peopleCooking === 1 ? "Person" : "People"}
          onChange={(peopleCooking) =>
            updatePreferences({ peopleCooking })
          }
        />
      </div>

      <div className="mt-12 rounded-[2rem] bg-[#d4ddd3] p-6 sm:p-8">
        <fieldset>
          <legend className="text-2xl font-semibold">Cooking time:</legend>

          <div className="mt-6 flex flex-wrap gap-4">
            {cookingTimes.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  updatePreferences({ cookingTime: option.value })
                }
                aria-pressed={preferences.cookingTime === option.value}
                className={`rounded-full px-5 py-2 ${
                  preferences.cookingTime === option.value
                    ? "bg-[#315f35] text-white"
                    : "bg-[#fff4e9]"
                }`}
              >
                <span className="block">{option.label}</span>
                <span className="block text-sm">{option.description}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-10">
          <legend className="text-2xl font-semibold">Cuisine</legend>

          <div className="mt-6 flex flex-wrap gap-4">
            {cuisines.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => updatePreferences({ cuisine: option.value })}
                aria-pressed={preferences.cuisine === option.value}
                className={`rounded-full px-5 py-2 ${
                  preferences.cuisine === option.value
                    ? "bg-[#315f35] text-white"
                    : "bg-[#fff4e9]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-10">
          <legend className="text-2xl font-semibold">
            Diet preferences
          </legend>

          <div className="mt-6 flex flex-wrap gap-4">
            {diets.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => updatePreferences({ diet: option.value })}
                aria-pressed={preferences.diet === option.value}
                className={`rounded-full px-5 py-2 ${
                  preferences.diet === option.value
                    ? "bg-[#315f35] text-white"
                    : "bg-[#fff4e9]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="min-h-11 bg-[#315f35] px-8 py-3 font-medium text-white"
        >
          Generate recipe
        </button>
      </div>
    </section>
  );
}

type CounterProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (value: number) => void;
};

function Counter({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}: CounterProps) {
  return (
    <div>
      <p className="text-xl">{label}</p>

      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
          aria-label={`Decrease ${label}`}
          className="grid size-10 place-items-center border-2 border-[#174d20] text-2xl disabled:opacity-40"
        >
          −
        </button>

        <span
          className="min-w-8 text-center text-2xl"
          aria-live="polite"
        >
          {value}
        </span>

        <span className="text-xl">{suffix}</span>

        <button
          type="button"
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
          aria-label={`Increase ${label}`}
          className="grid size-10 place-items-center border-2 border-[#174d20] text-2xl disabled:opacity-40"
        >
          +
        </button>
      </div>
    </div>
  );
}
