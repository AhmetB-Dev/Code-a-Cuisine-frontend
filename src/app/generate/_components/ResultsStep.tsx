import Image from "next/image";
import Link from "next/link";

type ResultsStepProps = {
  onGenerateAgain: () => void;
};

type MockRecipe = {
  id: string;
  title: string;
  cookingTime: number;
};

const recipes: MockRecipe[] = [
  {
    id: "1",
    title: "Pasta with spinach and cherry tomatoes",
    cookingTime: 20,
  },
  {
    id: "2",
    title: "Creamy garlic shrimp pasta",
    cookingTime: 22,
  },
  {
    id: "3",
    title: "Pasta alla Trapanese (Sicilian Tomato Pesto)",
    cookingTime: 20,
  },
];

export function ResultsStep({
  onGenerateAgain,
}: ResultsStepProps) {
  return (
    <section className="min-h-dvh bg-[#315f35] px-6 pb-16 pt-8 text-[#fff8ec]">
      <div className="mx-auto w-full max-w-3xl">
        <header className="text-center">
          <h1 className="text-[clamp(2.75rem,7vw,5rem)] font-medium leading-[0.95] tracking-tight">
            The recipe results
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#f4eadc] sm:text-lg">
            We took what you have and let our AI do the thinking.
            Here are 3 easy recipes you can make right now.
          </p>
        </header>

        <div className="mx-auto mt-8 max-w-xl overflow-hidden rounded-[2rem]">
          <Image
            src="/assets/img/robot-serving-dish.webp"
            alt="Illustration of a robot serving a prepared dish"
            width={574}
            height={222}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-[#fff4e9] px-5 py-2 text-sm font-medium text-[#315f35]">
            Italian
          </span>
          <span className="rounded-full bg-[#fff4e9] px-5 py-2 text-sm font-medium text-[#315f35]">
            Quick
          </span>
        </div>

        <div className="mt-10 space-y-5">
          {recipes.map((recipe, index) => (
            <article
              key={recipe.id}
              className="rounded-[2rem] bg-[#c5d2c5] p-6 text-[#174d20] sm:p-8"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/icons/serving-cloche.svg"
                  alt=""
                  width={30}
                  height={30}
                  aria-hidden="true"
                />
                <p className="text-lg font-semibold">
                  Recipe {index + 1}
                </p>
              </div>

              <h2 className="mt-5 text-[clamp(1.5rem,4vw,2rem)] font-medium leading-tight">
                {recipe.title}
              </h2>

              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/assets/icons/clock.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
                <p className="text-base">
                  Cooking time: {recipe.cookingTime} min
                </p>
              </div>

              <Link
                href={`/recipes/${recipe.id}`}
                className="mt-8 inline-flex min-h-11 items-center bg-[#fff8ec] px-6 py-3 font-semibold text-[#315f35] transition hover:bg-white"
              >
                View
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={onGenerateAgain}
            className="inline-flex min-h-11 items-center gap-4 px-4 py-3 text-lg font-medium transition hover:translate-x-1"
          >
            Generate new recipe
            <span aria-hidden="true" className="text-2xl">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
