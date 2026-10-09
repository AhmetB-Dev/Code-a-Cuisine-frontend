import Image from "next/image";
import Link from "next/link";

type PopularRecipe = {
  id: string;
  title: string;
  cookingTime: number;
  likes: number;
};

type Cuisine = {
  slug: string;
  name: string;
  emoji: string;
  image: string;
};

const popularRecipes: PopularRecipe[] = [
  {
    id: "1",
    title: "Pasta with spinach and cherry tomatoes",
    cookingTime: 20,
    likes: 66,
  },
  {
    id: "2",
    title: "Creamy garlic shrimp pasta",
    cookingTime: 22,
    likes: 51,
  },
  {
    id: "3",
    title: "Pasta alla Trapanese",
    cookingTime: 20,
    likes: 43,
  },
];

const cuisines: Cuisine[] = [
  {
    slug: "italian",
    name: "Italian cuisine",
    emoji: "🍕",
    image: "/assets/img/cuisine-card-italian.webp",
  },
  {
    slug: "german",
    name: "German cuisine",
    emoji: "🥨",
    image: "/assets/img/cuisine-card-german.webp",
  },
  {
    slug: "japanese",
    name: "Japanese cuisine",
    emoji: "🍣",
    image: "/assets/img/cuisine-card-japanese.webp",
  },
  {
    slug: "gourmet",
    name: "Gourmet cuisine",
    emoji: "✨",
    image: "/assets/img/cuisine-card-gourmet.webp",
  },
  {
    slug: "indian",
    name: "Indian cuisine",
    emoji: "🍛",
    image: "/assets/img/cuisine-card-indian.webp",
  },
  {
    slug: "fusion",
    name: "Fusion cuisine",
    emoji: "🥢",
    image: "/assets/img/cuisine-card-fusion.webp",
  },
];

export default function CookbookPage() {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-4 px-5 pb-3 pt-5 sm:px-8">
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

          <Link
            href="/"
            aria-label="Zurück zur Startseite"
            className="grid size-10 place-items-center rounded-full transition hover:bg-[#eef2ec] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315f35]"
          >
            <Image
              src="/assets/icons/arrow-left.svg"
              alt=""
              width={28}
              height={28}
              aria-hidden="true"
            />
          </Link>
        </div>
      </header>

      <main className="bg-white px-4 pb-12 sm:px-6">
        <div className="mx-auto w-full max-w-5xl">
          <section className="rounded-[1.5rem] bg-[#f3f6f1] p-5 text-[#174d20] sm:p-7">
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-medium leading-none">
              Cookbook
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
              From quick bites to gourmet delights, explore them all in
              our ultimate cookbook and get inspired for your next
              culinary adventure.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <h2 className="text-lg font-semibold">Most liked recipes</h2>

              <Image
                src="/assets/icons/heart-outline-green.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
            </div>

            <div className="-mx-1 mt-4 flex snap-x gap-3 overflow-x-auto px-1 pb-2">
              {popularRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/recipes/${recipe.id}`}
                  className="min-w-[15rem] snap-start rounded-[1rem] bg-[#dce3dd] p-4 transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315f35]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src="/assets/icons/clock.svg"
                        alt=""
                        width={16}
                        height={16}
                        aria-hidden="true"
                      />
                      Cooking time: {recipe.cookingTime}min
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full bg-[#c9d4c7] px-2 py-1">
                      <Image
                        src="/assets/icons/heart-filled.svg"
                        alt=""
                        width={13}
                        height={13}
                        aria-hidden="true"
                      />
                      {recipe.likes}
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-medium leading-snug">
                    {recipe.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="cuisine-title" className="mt-8">
            <h2 id="cuisine-title" className="sr-only">
              Cuisines
            </h2>

            <div className="grid gap-7 md:grid-cols-2">
              {cuisines.map((cuisine) => (
                <article key={cuisine.slug}>
                  <h3 className="mb-2 text-lg font-semibold text-[#315f35] sm:text-xl">
                    {cuisine.name}{" "}
                    <span aria-hidden="true">{cuisine.emoji}</span>
                  </h3>

                  <Link
                    href={`/cookbook/${cuisine.slug}`}
                    aria-label={`${cuisine.name} recipes`}
                    className="block overflow-hidden rounded-[0.25rem] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315f35]"
                  >
                    <Image
                      src={cuisine.image}
                      alt={`${cuisine.name} food`}
                      width={720}
                      height={420}
                      className="aspect-[16/9] w-full object-cover transition duration-300 hover:scale-[1.015]"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-10 flex justify-center">
            <Link
              href="/generate"
              className="inline-flex min-h-11 items-center gap-3 px-4 py-3 text-sm font-medium text-[#315f35] transition hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315f35] sm:text-base"
            >
              Generate new recipe
              <span aria-hidden="true" className="text-xl">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
