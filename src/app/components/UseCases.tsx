"use client";

import Image from "next/image";
import { useState } from "react";

import { useCases } from "../../../data/data";

export default function UseCases() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const category = useCases[categoryIndex];
  const activeItem = category.items[itemIndex];

  function selectCategory(index: number) {
    setCategoryIndex(index);
    setItemIndex(0);
  }

  return (
    <section id="use-cases" className="scroll-mt-24 px-3 py-20 sm:px-4 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Любой контент в фирменном стиле за считанные минуты
        </h2>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:mt-12">
          {useCases.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectCategory(index)}
              aria-pressed={categoryIndex === index}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                categoryIndex === index
                  ? "bg-[#050505] text-white"
                  : "bg-white text-neutral-600 hover:text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {category.items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setItemIndex(index)}
                aria-pressed={itemIndex === index}
                className={`rounded-2xl p-5 text-left transition-colors sm:p-6 ${
                  itemIndex === index ? "bg-white" : "bg-transparent hover:bg-white/60"
                }`}
              >
                <span className="block text-xl font-semibold tracking-[-0.02em]">{item.title}</span>
                <span className="mt-2 block leading-6 text-neutral-600">{item.description}</span>
              </button>
            ))}
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-[28px] bg-white p-2 sm:min-h-[480px]">
            <Image
              key={activeItem.image}
              src={`${basePath}${activeItem.image}`}
              alt={activeItem.title}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
