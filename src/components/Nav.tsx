import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-ink no-underline"
        >
          Virágh Niki
        </Link>
        <nav aria-label="Fő navigáció" className="hidden items-center gap-8 md:flex">
          <Link
            href="/#kezelesek"
            className="text-sm tracking-wide text-espresso no-underline transition-colors hover:text-ink"
          >
            Kezelések
          </Link>
          <Link
            href="/#munkaim"
            className="text-sm tracking-wide text-espresso no-underline transition-colors hover:text-ink"
          >
            Munkáim
          </Link>
          <Link
            href="/#rolam"
            className="text-sm tracking-wide text-espresso no-underline transition-colors hover:text-ink"
          >
            Rólam
          </Link>
        </nav>
        <a
          href="/#kapcsolat"
          className="rounded-full bg-ink px-5 py-2.5 text-sm tracking-wide text-porcelain no-underline transition-transform duration-150 ease-out hover:bg-espresso active:scale-[0.97]"
        >
          Időpontfoglalás
        </a>
      </div>
    </header>
  );
}
