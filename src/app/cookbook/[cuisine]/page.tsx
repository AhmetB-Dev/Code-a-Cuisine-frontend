import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cuisinePages } from "./cuisine.mock";

type CuisinePageProps = {
  params: Promise<{
    cuisine: string;
  }>;
};

export default async function CuisinePage({
  params,
}: CuisinePageProps) {
  const { cuisine } = await params;
  const page = cuisinePages[cuisine];

  if (!page) {
    notFound();
  }

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-4 px-5 pb-4 pt-5 sm:px-8">
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
            href="/cookbook"
            aria-label="Zurück zum Cookbook"
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
        <section className="mx-auto w-full max-w-4xl text-[#315f35]">
          <div className="relative mb-8 overflow-hidden rounded-[1.25rem] bg-[#fff3e7]">
            <Image
              src={page.mobileDecoration}
              alt=""
              width={420}
              height={110}
              className="h-auto w-full md:hidden"
              priority
            />

            <Image
              src={page.desktopDecoration}
              alt=""
              width={1100}
              height={145}
              className="hidden h-auto w-full md:block"
              priority
            />

            <h1 className="absolute inset-0 grid place-items-center px-16 text-center text-xl font-semibold sm:text-2xl">
              {page.title}
            </h1>
          </div>

          <ol className="space-y-5">
            {page.recipes.map((recipe, index) => (
              <li key={`${recipe.id}-${index}`}>
                <article
                  className={`rounded-[1.4rem] p-4 sm:p-5 ${
                    index % 2 === 1 ? "bg-[#fff3e7]" : "bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#fff0dc] text-sm font-semibold">
                      {index + 1}.
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-sm sm:text-base">
                      <Image
                        src="/assets/icons/clock.svg"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                      Cooking time: {recipe.cookingTime}min
                    </span>
                  </div>

                  <Link
                    href={`/recipes/${recipe.id}`}
                    className="mt-2 block text-lg font-semibold leading-snug hover:underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315f35] sm:text-xl"
                  >
                    {recipe.title}
                  </Link>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#dce3d9] px-3 py-1 text-sm"
                      >
                        {tag}
                      </span>
                    ))}

                    <span className="inline-flex items-center gap-1 rounded-full bg-[#cbd6c8] px-3 py-1 text-sm">
                      <Image
                        src="/assets/icons/heart-outline-green.svg"
                        alt=""
                        width={16}
                        height={16}
                        aria-hidden="true"
                      />
                      {recipe.likes}
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ol>

          <nav
            aria-label="Recipe pages"
            className="mt-10 flex items-center justify-center gap-5 text-sm sm:text-base"
          >
            <span aria-hidden="true">‹</span>
            <Link href="?page=1" aria-current="page">
              1
            </Link>
            <Link href="?page=2">2</Link>
            <Link href="?page=3">3</Link>
            <span aria-hidden="true">…</span>
            <Link href="?page=8">8</Link>
            <Link href="?page=2" aria-label="Next page">
              ›
            </Link>
          </nav>

          <div className="mt-10 flex justify-center">
            <Link
              href="/generate"
              className="inline-flex min-h-11 items-center justify-center bg-[#315f35] px-7 py-3 font-medium text-white transition hover:bg-[#274d2b] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315f35]"
            >
              Generate recipe
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
