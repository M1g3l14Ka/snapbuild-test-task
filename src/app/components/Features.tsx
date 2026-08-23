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
    <section id="features" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto max-w-[1440px] rounded-[28px] bg-[#050505] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Безопасность без компромиссов
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {securityCards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-3xl bg-[#1a1a1a] p-4">
              <div className="relative aspect-[6/5] overflow-hidden rounded-2xl bg-[#242424]">
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
                <p className="mt-3 leading-7 text-neutral-400">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
