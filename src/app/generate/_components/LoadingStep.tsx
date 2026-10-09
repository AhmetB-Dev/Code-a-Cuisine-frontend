"use client";

import { useEffect, useState } from "react";

const ANIMATION_DELAY_MS = 1200;

export function LoadingStep() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowAnimation(true);
    }, ANIMATION_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section
      className="min-h-screen bg-[#315f35] px-6 py-12 text-[#fff8ec]"
      aria-labelledby="loading-title"
      aria-busy="true"
    >
      <div className="mx-auto flex w-full max-w-xl flex-col items-center">
        <div className="flex aspect-[436/613] w-full max-w-sm items-center justify-center overflow-hidden rounded-[2rem] bg-[#c5d2c5]">
          {showAnimation ? (
            <img
              src="/assets/animations/recipe-generating.webp"
              alt=""
              className="h-full w-full object-contain"
            />
          ) : (
            <div
              className="size-12 animate-spin rounded-full border-4 border-[#315f35]/25 border-t-[#315f35]"
              aria-hidden="true"
            />
          )}
        </div>

        <h1 id="loading-title" className="mt-10 text-[clamp(2rem,6vw,3.5rem)] font-bold">
          Generating ...
        </h1>

        <p className="sr-only">Your recipes are currently being generated.</p>
      </div>
    </section>
  );
}
