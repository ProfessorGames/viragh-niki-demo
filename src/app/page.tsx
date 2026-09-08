import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollShowcase from "@/components/ScrollShowcase";
import { treatments } from "@/lib/treatments";

const reviews = [
  {
    name: "Réka",
    text: "Reggelente tíz perccel korábban kelek, mert nem kell sminkelnem a szemöldökömet. Két éve tart, még mindig tökéletes.",
  },
  {
    name: "Anna",
    text: "Féltem a mesterséges hatástól, de a konzultáción Niki minden árnyalatról meggyőzött. Az eredmény természetesebb, mint a saját szemöldökom volt.",
  },
  {
    name: "Judit",
    text: "Az ajak-permán után mindig kipihentnek látszom — még hétfőn reggel is. A korrekciós alkalom után már tudtam, hogy jó helyen vagyok.",
  },
];

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-36 md:grid-cols-2 md:pb-36 md:pt-44">
          <div>
            <p className="mb-6 text-sm tracking-[0.2em] text-clay-deep uppercase">
              Esztétikai tetoválás · Budapest
            </p>
            <h1 className="max-w-xl font-display text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.05] text-ink">
              A szépség, ami reggelente is kész.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-espresso">
              Mikroblading, powder brows és ajak-permán — hajszálvékony
              precizitással, a te arcvonásaidhoz igazítva.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kapcsolat"
                className="rounded-full bg-ink px-8 py-4 text-porcelain no-underline transition-transform duration-150 ease-out hover:bg-espresso active:scale-[0.97]"
              >
                Időpontfoglalás
              </a>
              <a
                href="#kezelesek"
                className="rounded-full border border-ink/50 px-8 py-4 text-ink no-underline transition-transform duration-150 ease-out hover:border-ink active:scale-[0.97]"
              >
                Kezelések
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/gallery-1.jpg"
              alt="Természetes permanent make-up eredmény — portré"
              fill
              priority
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rólam */}
      <section id="rolam" className="bg-shell/60 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.4fr]">
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            A kezedben nyugodhat meg minden vonal.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-espresso">
            <p>
              Több száz elégedett vendég, nemzetközi tanúsítványok és egy
              elv: az eredmény úgy nézzen ki, mintha a tiéd lenne — mert az is
              marad.
            </p>
            <p>
              Minden kezelés szín- és forma-tervezéssel indul, steril,
              egyszer használatos eszközökkel zajlik, és hat héttel később egy
              korrekciós alkalom teszi teljessé.
            </p>
          </div>
        </div>
      </section>

      {/* Kezelések */}
      <section id="kezelesek" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
              Kezelések
            </h2>
            <p className="max-w-sm text-espresso">
              Minden ár tartalmazza a konzultációt, az első kezelést és a hat
              heti korrekciót.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={`/kezelesek/${t.slug}`}
                className="group block overflow-hidden rounded-[1.5rem] bg-shell/50 no-underline transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl text-ink">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso">
                    {t.tagline}
                  </p>
                  <p className="mt-4 text-sm font-medium tracking-wide text-clay-deep">
                    {t.price} · {t.duration}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Munkáim — scroll showcase */}
      <ScrollShowcase />

      {/* Vélemények */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-14 font-display text-3xl leading-tight text-ink md:text-4xl">
            Akik már elkészültek
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="rounded-[1.5rem] bg-shell/50 p-8"
              >
                <p className="leading-relaxed text-espresso">„{r.text}"</p>
                <footer className="mt-5 text-sm tracking-wide text-clay-deep">
                  {r.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Kapcsolat */}
      <section id="kapcsolat" className="bg-ink py-24 text-porcelain md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              Foglald le a konzultációdat.
            </h2>
            <p className="mt-5 max-w-md text-porcelain/70">
              Ingyenes, kötelezettség nélküli — együtt tervezzük meg a neked
              való formát és árnyalatot.
            </p>
          </div>
          <a
            href="mailto:hello@viraghniki.hu"
            className="mt-10 inline-block rounded-full bg-porcelain px-9 py-4 text-ink no-underline transition-transform duration-150 ease-out active:scale-[0.97] md:mt-0"
          >
            Időpont kérése
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
