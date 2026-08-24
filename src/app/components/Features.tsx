import Image from "next/image";

const securityCards = [
  {
    title: "Только одобренные модели",
    description: "Российские и локализованные модели без экспортных ограничений.",
    image: "/assets/security/approved-models.webp",
  },
  {
    title: "Ваш контур, ваша юрисдикция",
    description: "Развёртывание в частном облаке с учётом 152-ФЗ и внутренних требований.",
    image: "/assets/security/private-cloud.webp",
  },
  {
    title: "Собственный AI-стек",
    description: "Вы сами определяете модели, хранилища, доступы и цепочки валидации.",
    image: "/assets/security/ai-stack.webp",
  },
];

export default function Features() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <div className="page-shell">
        <h2 className="section-title max-w-5xl">
          Безопасность без компромиссов
        </h2>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {securityCards.map((card) => (
            <article key={card.title}>
              <div className="relative aspect-[6/5] overflow-hidden rounded-3xl bg-neutral-100">
                <Image
                  src={`${basePath}${card.image}`}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="pt-7">
                <h3 className="text-2xl font-semibold tracking-[-0.025em]">{card.title}</h3>
                <p className="mt-3 max-w-md leading-7 text-neutral-600">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
