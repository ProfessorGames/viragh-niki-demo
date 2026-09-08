export default function Footer() {
  return (
    <footer className="bg-ink text-porcelain">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-display text-3xl leading-tight md:text-4xl">
          Készen állsz a változásra?
        </p>
        <p className="mt-4 max-w-md text-porcelain/70">
          Írj bátran — a konzultáció kötelezettség nélküli, és minden kérdésedre
          válaszolunk.
        </p>
        <a
          href="mailto:hello@viraghniki.hu"
          className="mt-8 inline-block rounded-full bg-porcelain px-8 py-3.5 text-ink no-underline transition-transform duration-150 ease-out active:scale-[0.97]"
        >
          Időpontfoglalás
        </a>
        <div className="mt-16 flex flex-col gap-2 border-t border-porcelain/15 pt-8 text-sm text-porcelain/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Virágh Niki — Esztétikai tetoválás, Budapest</p>
          <p>Instagram · Facebook · +36 30 000 0000</p>
        </div>
      </div>
    </footer>
  );
}
