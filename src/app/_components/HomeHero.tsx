import Link from "next/link";

export function HomeHero() {
  return (
    <section className="flex min-h-[calc(100dvh-5rem)] flex-col justify-between items-start bg-[#315f35] bg-[url('/assets/img/cuisine-gallery-collage.webp')] bg-[position:300%] bg-[length:80%] bg-no-repeat px-[1.6rem] py-8 text-[#fffaf0]">
      <div>
        <p className="text-[clamp(1rem,1.8vw,1.35rem)]  tracking-wide ">
          AI-Powered <br />
          recipe generator
        </p>
        <h1 className="mt-3 text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tight">
          Code à <br /> Cuisine
        </h1>
        <div className="mt-8">
          <Link
            href="/generate"
            className="inline-flex min-h-11 items-center justify-center  bg-[#fffaf0] px-6 py-3 font-semibold text-[#1E5515] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fffaf0]"
          >
            Get started
          </Link>
        </div>{" "}
      </div>
      <div className="flex flex-col items-center gap-4 ">
        <p className="font-semibold">Hungry for inspiration?</p>
        <Link
          href="/cookbook"
          className="text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fffaf0]"
        >
          Go to cookbook →
        </Link>
      </div>
    </section>
  );
}
