import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[#315f35] text-[#fffaf0]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fffaf0]"
          aria-label="Code à Cuisine – Startseite"
        >
          <Image
            src="/assets/img/logo-light.svg"
            alt="Code à Cuisine"
            width={95}
            height={32}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
