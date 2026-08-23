import Image from "next/image";

const processCards = [
  {
    title: "Дизайн-система — ядро платформы",
    description: "Ваши компоненты, цвета и шрифты становятся единственным источником стиля.",
    image: "/assets/process/design-system.webp",
  },
  {
    title: "Гибкая конфигурация",
    description: "Правила бренда задаются один раз и работают в каждой новой генерации.",
    image: "/assets/process/configuration.webp",
  },
  {
    title: "Соответствие по умолчанию",
    description: "Сайты, изображения, видео и презентации всегда собираются по вашим правилам.",
    image: "/assets/process/compliance.webp",
  },
];

export default function Process() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="process" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-4xl">
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Одна платформа — весь маркетинг
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            Сайты, изображения, видео, баннеры и презентации — из одной идеи и всегда в вашем стиле.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {processCards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-[28px] bg-white p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src={`${basePath}${card.image}`}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="px-2 pb-4 pt-6">
                <h3 className="text-2xl font-semibold tracking-[-0.025em]">{card.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
