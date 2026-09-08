"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const shots = [
  { src: "/images/microblading.jpg", alt: "Mikroblading eredmény — szemöldök részlet" },
  { src: "/images/gallery-2.jpg", alt: "Powder brows — oldalprofil portré" },
  { src: "/images/ajak.jpg", alt: "Ajak-permán eredmény — ajkak részlet" },
  { src: "/images/gallery-3.jpg", alt: "Szempilla-erősítés — szem részlet" },
  { src: "/images/powder.jpg", alt: "Powder brows — szemöldök részlet" },
];

export default function ScrollShowcase() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-shot]");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { scale: 0.85, opacity: 0.25 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 35%",
                scrub: true,
              },
            }
          );
          if (i < cards.length - 1) {
            gsap.to(card, {
              opacity: 0.25,
              scale: 0.95,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "bottom 55%",
                end: "bottom 20%",
                scrub: true,
              },
            });
          }
        });
      }, root);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section
      id="munkaim"
      ref={root}
      aria-label="Munkáim galéria"
      className="bg-porcelain py-24 md:py-32"
    >
      <div className="mx-auto mb-14 max-w-6xl px-6">
        <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
          Munkáim
        </h2>
        <p className="mt-4 max-w-md text-espresso">
          Gorgetsd végig — minden kép egy-egy elkészült vendég.
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:gap-10">
        {shots.map((s, i) => (
          <div
            key={s.src}
            data-shot
            className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] md:aspect-[3/4] ${
              i % 2 === 1 ? "md:ml-auto md:w-[70%]" : "md:w-[70%]"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 768px) 70vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
