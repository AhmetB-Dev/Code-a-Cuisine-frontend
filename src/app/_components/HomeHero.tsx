import Link from "next/link";

export function HomeHero() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] bg-[#315f35] text-[#fffaf0]">
      <div className="mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[clamp(1rem,1.8vw,1.35rem)] font-medium tracking-wide text-[#e9eadb]">
            AI-Powered recipe generator
          </p>

          <h1 className="mt-3 text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tight">
            Code à Cuisine
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#e9eadb] sm:text-lg">
            Turn the ingredients you already have into recipes that fit your
            time, taste and dietary preferences.
          </p>

          <div className="mt-8">
            <Link
              href="/generate"
              className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[#fffaf0] px-6 py-3 font-semibold text-[#315f35] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fffaf0]"
            >
              Get started
            </Link>
          </div>
        </div>

        <div
          className="relative mx-auto hidden min-h-[34rem] w-full max-w-lg lg:block"
          aria-hidden="true"
        >
          <div className="absolute right-0 top-0 aspect-square w-[58%] rounded-full bg-[#f2d8ad]" />
          <div className="absolute left-[8%] top-[30%] aspect-square w-[58%] rounded-full bg-[#efb67f]" />
          <div className="absolute bottom-0 right-[5%] aspect-square w-[58%] rounded-full bg-[#b7cf9b]" />
        </div>

        <div className="flex items-center gap-4 lg:col-span-2">
          <p className="font-semibold">Hungry for inspiration?</p>
          <Link
            href="/cookbook"
            className="text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fffaf0]"
          >
            Go to cookbook →
          </Link>
        </div>
      </div>
    </section>
  );
}
