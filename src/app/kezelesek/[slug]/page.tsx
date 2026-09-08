import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { treatments, getTreatment } from "@/lib/treatments";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return { title: `${t.name} — Virágh Niki`, description: t.tagline };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Nav />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-36 md:grid-cols-2 md:pb-36 md:pt-44">
        <div>
          <p className="mb-6 text-sm tracking-[0.2em] text-clay uppercase">
            Kezelés
          </p>
          <h1 className="max-w-xl font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.08] text-ink">
            {t.name}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-espresso">
            {t.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm tracking-wide text-clay-deep">
            <span className="font-medium">{t.price}</span>
            <span>{t.duration}</span>
          </div>
          <a
            href="/#kapcsolat"
            className="mt-10 inline-block rounded-full bg-ink px-8 py-4 text-porcelain no-underline transition-transform duration-150 ease-out hover:bg-espresso active:scale-[0.97]"
          >
            Időpont kérése
          </a>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
          <Image
            src={t.image}
            alt={t.name}
            fill
            priority
            sizes="(min-width: 768px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-shell/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-espresso">
            {t.description.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <aside className="rounded-[1.5rem] bg-porcelain p-8">
            <h2 className="font-display text-xl text-ink">Mit tartalmaz?</h2>
            <ul className="mt-5 space-y-3">
              {t.includes.map((inc) => (
                <li key={inc} className="flex gap-3 text-espresso">
                  <span aria-hidden="true" className="text-clay">
                    —
                  </span>
                  {inc}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl leading-tight text-ink">
              Más kezelések
            </h2>
            <Link
              href="/#kezelesek"
              className="text-sm tracking-wide text-clay-deep no-underline hover:text-ink"
            >
              Minden kezelés
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {treatments
              .filter((x) => x.slug !== t.slug)
              .map((x) => (
                <Link
                  key={x.slug}
                  href={`/kezelesek/${x.slug}`}
                  className="group flex items-center gap-6 overflow-hidden rounded-[1.5rem] bg-shell/50 no-underline"
                >
                  <div className="relative h-36 w-28 shrink-0 overflow-hidden">
                    <Image
                      src={x.image}
                      alt={x.name}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="py-5 pr-6">
                    <h3 className="font-display text-xl text-ink">{x.name}</h3>
                    <p className="mt-1 text-sm text-espresso">{x.tagline}</p>
                    <p className="mt-2 text-sm font-medium text-clay-deep">
                      {x.price}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
