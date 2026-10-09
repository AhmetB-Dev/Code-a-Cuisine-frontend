type GenerationErrorModalProps = {
  onClose: () => void;
  onBackToIngredients: () => void;
};

export function GenerationErrorModal({
  onClose,
  onBackToIngredients,
}: GenerationErrorModalProps) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-5">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="generation-error-title"
        className="relative w-full max-w-lg rounded-[2.5rem] bg-[#315f35] px-8 py-12 text-[#fff8ec] sm:px-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close error message"
          className="absolute right-6 top-5 text-4xl leading-none"
        >
          ×
        </button>

        <h2
          id="generation-error-title"
          className="max-w-sm text-[clamp(2rem,7vw,3.5rem)] leading-tight"
        >
          Ups!
          <br />
          Not quite enough...
        </h2>

        <p className="mt-10 max-w-md text-lg leading-relaxed">
          It looks like some ingredient quantities aren&apos;t sufficient for
          your selected servings. Please add or adjust quantities and try
          again.
        </p>

        <button
          type="button"
          onClick={onBackToIngredients}
          className="mt-12 flex items-center gap-4 text-xl transition hover:translate-x-1"
        >
          Go back to ingredients
          <span aria-hidden="true" className="text-4xl">
            →
          </span>
        </button>
      </section>
    </div>
  );
}
