const builderUrl = "https://builder.snapbuild.ru/";

export default function CTA() {
  return (
    <section id="cta" className="py-4">
      <div className="brand-gradient flex min-h-[480px] flex-col items-center justify-center rounded-[22px] px-[var(--page-gutter)] py-20 text-center sm:min-h-[570px]">
        <h2 className="max-w-[1440px] text-balance text-[clamp(2.25rem,4.2vw,5rem)] font-medium leading-[1.08] tracking-[-0.045em]">
          Профессиональные материалы в фирменном стиле за минуты, а не дни
        </h2>
        <a
          href={builderUrl}
          className="primary-button mt-10 rounded-xl bg-white px-6 py-4 text-sm font-medium text-black hover:bg-white/90 sm:text-base"
        >
          Начать сейчас
        </a>
      </div>
    </section>
  );
}
