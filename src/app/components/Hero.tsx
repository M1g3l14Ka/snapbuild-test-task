import Image from "next/image";

const builderUrl =
  "https://builder.snapbuild.ru/page/019f7fde-d606-7e57-beda-3b163e5f28f3/019f7fde-df04-7ed1-b554-24792c0e689c";

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="hero" className="scroll-mt-24 px-3 pb-16 pt-4 sm:px-4 sm:pb-24">
      <div className="mx-auto overflow-hidden rounded-[28px] bg-white px-5 pb-5 pt-16 sm:px-8 sm:pt-24 lg:max-w-[1440px] lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-medium text-neutral-500">Маркетинг в рамках дизайн-системы</p>
          <h1 className="text-balance text-[clamp(2.5rem,7vw,6.8rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
            Платформа, где всё создаётся в рамках вашего бренда
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-7 text-neutral-600 sm:text-xl sm:leading-8">
            Подключите дизайн-систему, чтобы команда создавала профессиональные материалы в фирменном стиле за минуты, а не дни.
          </p>
          <a
            href={builderUrl}
            className="mt-8 inline-flex rounded-xl bg-[#050505] px-6 py-3.5 font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Начать сейчас
          </a>
        </div>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl bg-[#e9e9eb] sm:mt-16">
          <Image
            src={`${basePath}/hero-snapbuild.webp`}
            alt="Интерфейс платформы Снэпбилд"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1400px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
