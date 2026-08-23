import Image from "next/image";

const logos = [
  { src: "/assets/logos/brand-1.svg", alt: "Клиент Снэпбилд", width: 101, height: 22 },
  { src: "/assets/logos/brand-2.svg", alt: "Клиент Снэпбилд", width: 43, height: 32 },
  { src: "/assets/logos/avito.svg", alt: "Авито", width: 102, height: 26 },
  { src: "/assets/logos/cian.svg", alt: "Циан", width: 59, height: 22 },
  { src: "/assets/logos/lenta.svg", alt: "Лента", width: 64, height: 15 },
];

export default function Logos() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="px-3 pb-20 sm:px-4 sm:pb-28">
      <div className="mx-auto max-w-[1440px] rounded-[28px] bg-white px-5 py-10 sm:px-10 sm:py-14">
        <p className="text-center text-sm text-neutral-500">
          С платформой работают команды, для которых бренд — закон
        </p>
        <div className="mt-9 grid grid-cols-2 items-center gap-8 sm:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.src} className="flex h-10 items-center justify-center opacity-65 grayscale">
              <Image
                src={`${basePath}${logo.src}`}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-8 w-auto max-w-28"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
