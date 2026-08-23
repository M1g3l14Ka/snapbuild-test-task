const builderUrl = "https://builder.snapbuild.ru/";

export default function CTA() {
  return (
    <section className="px-3 py-3 sm:px-4 sm:py-4">
      <div className="mx-auto flex min-h-[480px] max-w-[1440px] flex-col items-center justify-center rounded-[32px] bg-[#050505] px-6 py-20 text-center text-white sm:min-h-[560px] sm:rounded-[40px]">
        <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
          Профессиональные материалы в фирменном стиле за минуты, а не дни
        </h2>
        <a
          href={builderUrl}
          className="mt-10 rounded-xl bg-white px-6 py-4 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 sm:text-base"
        >
          Начать сейчас
        </a>
      </div>
    </section>
  );
}
