import Image from "next/image";

const builderUrl =
  "https://builder.snapbuild.ru/page/019f7fde-d606-7e57-beda-3b163e5f28f3/019f7fde-df04-7ed1-b554-24792c0e689c";

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="hero" className="px-3 pb-20 pt-3 sm:px-4 sm:pb-32 sm:pt-4">
      <div className="brand-gradient mx-auto overflow-hidden rounded-[28px] px-5 pb-5 pt-36 sm:px-8 sm:pt-44 lg:px-[var(--page-gutter)] lg:pt-48">
        <div className="mx-auto max-w-[1312px] text-center">
          <p className="mb-5 text-sm font-medium text-neutral-500">Маркетинг в рамках дизайн-системы</p>
          <h1 className="text-balance text-[clamp(2.65rem,5.35vw,6.35rem)] font-semibold leading-[1.01] tracking-[-0.055em]">
            Платформа, где всё создаётся в рамках вашего бренда и дизайн-системы
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-7 text-neutral-600 sm:text-xl sm:leading-8">
            Подключите дизайн-систему, чтобы команда создавала профессиональные материалы в фирменном стиле за минуты, а не дни.
          </p>
          <a
            href={builderUrl}
            className="primary-button mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 font-medium text-black hover:bg-white/90"
          >
            Начать сейчас
          </a>
        </div>

        <div className="relative mt-16 aspect-[16/9] overflow-hidden rounded-[20px] bg-[#e9e9eb] sm:mt-20">
          <Image
            src={`${basePath}/hero-snapbuild.webp`}
            alt="Интерфейс платформы Снэпбилд"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1900px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
