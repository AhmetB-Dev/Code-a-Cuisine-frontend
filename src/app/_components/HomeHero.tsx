import Link from "next/link";

export function HomeHero() {
  return (
    <section className="flex min-h-[calc(100dvh-5rem)] flex-col justify-between items-start bg-[#315f35] bg-[url('/assets/img/cuisine-gallery-collage-mobile.webp')] bg-no-repeat bg-right bg-auto px-[1.6rem] py-8 text-[#fffaf0] h-dvh">
      <header>
        <img src="/assets/img/logo-light.svg" alt="" />
      </header>

      <div className="flex flex-col gap-[0.8rem]">
        <p className="text-[clamp(1.5rem,_0.8rem_+_2vw,_3.2rem)]  ">
          AI-Powered <br />
          recipe generator
        </p>
        <h1 className="text-[clamp(4rem,_1rem_+_6vw,_7rem)] leading-[4rem] ">
          Code à
          <br
          // className="hidden md:block"
          />
          Cuisine
        </h1>
        <div className="mt-8">
          <Link
            href="/generate"
            className="inline-flex min-h-11 items-center justify-center  bg-[#fffaf0] px-6 py-3 font-semibold text-[#1E5515]   [padding-block:clamp(0.25rem,0.7rem,1rem)]
  [padding-inline:clamp(1rem,1.3rem,1.6rem)]"
          >
            Get started
          </Link>
        </div>{" "}
      </div>
      <div className="flex flex-col  gap-4 ">
        <p className="text-[clamp(1.5rem,_0.5rem_+_1rem,_2rem)]">
          Hungry for <br />
          inspiration?
        </p>
        <Link href="/cookbook" className=" text-[clamp(1rem,_0.5rem_+_1vw,_1.25rem)]">
          Go to cookbook →
        </Link>
      </div>
    </section>
  );
}
