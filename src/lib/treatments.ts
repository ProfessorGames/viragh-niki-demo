export type Treatment = {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  duration: string;
  price: string;
  includes: string[];
  image: string;
};

export const treatments: Treatment[] = [
  {
    slug: "microblading",
    name: "Microblading",
    tagline: "Hajszálvékony vonalak, természetes hatás",
    description: [
      "A microblading hajszálvékony, kézzel rajzolt vonalakkal adja vissza a szemöldök teltségét. Az eredmény természetes — senki nem fogja megmondani, hogy tetoválás.",
      "A kezelés két lépéses: az első alkalommal kialakítjuk a formát és a színt, hat héttel később egy korrekció teszi véglegessé az eredményt.",
    ],
    duration: "kb. 2,5 óra + 1 korrekció",
    price: "139 000 Ft",
    includes: [
      "Személyes konzultáció és forma-tervezés",
      "Az első kezelés + hat heti korrekció",
      "Utógondozási csomag és részletes tájékoztató",
    ],
    image: "/images/microblading.jpg",
  },
  {
    slug: "powder-brows",
    name: "Powder brows",
    tagline: "Puha, púderes árnyalat — mint a frissen húzott szemöldök",
    description: [
      "A powder brows technika púderes, lágy árnyalatot ad, mintha mindig tökéletesen ki lenne húzva a szemöldököd. Kimenetből kész életfigurához, elegáns, határozott megjelenéshez.",
      "Intenzitását egyedileg állítjuk be: halvány nappali árnyalattól a markánsabb formáig.",
    ],
    duration: "kb. 2,5 óra + 1 korrekció",
    price: "129 000 Ft",
    includes: [
      "Személyes konzultáció és forma-tervezés",
      "Az első kezelés + hat heti korrekció",
      "Utógondozási csomag és részletes tájékoztató",
    ],
    image: "/images/powder.jpg",
  },
  {
    slug: "ajak-perman",
    name: "Ajak-permán",
    tagline: "Friss, egészséges ajakszín — mosolyra is",
    description: [
      "Az ajak-permán (lip blush) egyenletes, friss ajakszínt ad, kiemeli a kontúrt és optikailag teltebbé teszi az ajkakat. Reggelente is kész a smink.",
      "A pigment árnyalatát a te ajakszínedhez igazítjuk — az eredmény sosem mesterséges.",
    ],
    duration: "kb. 2 óra + 1 korrekció",
    price: "119 000 Ft",
    includes: [
      "Személyes konzultáció és árnyalat-tervezés",
      "Az első kezelés + hat heti korrekció",
      "Utógondozási csomag és részletes tájékoztató",
    ],
    image: "/images/ajak.jpg",
  },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
