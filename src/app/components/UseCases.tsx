"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { useCases } from "../../../data/data";

export default function UseCases() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [loadedImage, setLoadedImage] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const category = useCases[categoryIndex];
  const activeItem = category.items[itemIndex];
  const imageLoaded = loadedImage === activeItem.image;

  useEffect(() => {
    const images = category.items.map((item) => {
      const image = new window.Image();
      image.src = `${basePath}${item.image}`;
      return image;
    });

    return () => images.forEach((image) => {
      image.src = "";
    });
  }, [basePath, category.items]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setTimeout(() => {
      setItemIndex((index) => (index + 1) % category.items.length);
    }, 10_000);

    return () => window.clearTimeout(timer);
  }, [category.items.length, categoryIndex, itemIndex, shouldReduceMotion]);

  function selectCategory(index: number) {
    setCategoryIndex(index);
    setItemIndex(0);
  }

  return (
    <section id="use-cases" className="scroll-mt-24 py-24 sm:py-32">
      <div className="page-shell">
        <h2 className="section-title max-w-[1600px]">
          Любой контент в фирменном стиле за считанные минуты
        </h2>

        <div className="scrollbar-hidden mt-12 flex gap-2 overflow-x-auto pb-2 sm:mt-16">
          {useCases.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectCategory(index)}
              aria-pressed={categoryIndex === index}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-medium transition-[background-color,color,box-shadow] duration-300 cursor-pointer ${
                categoryIndex === index
                  ? "bg-[#050505] text-white"
                  : "bg-white text-neutral-600 hover:text-black hover:shadow-md"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(360px,0.34fr)_minmax(0,1fr)] lg:gap-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-1">
            {category.items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setItemIndex(index)}
                aria-pressed={itemIndex === index}
                className={`relative overflow-hidden border-b border-neutral-300 p-6 text-left transition-colors duration-300 sm:p-7 cursor-pointer ${
                  itemIndex === index ? "rounded-2xl border-transparent bg-white" : "hover:bg-white/50"
                }`}
              >
                <span className="block text-xl font-semibold tracking-[-0.02em]">{item.title}</span>
                <span className="mt-2 block leading-6 text-neutral-600">{item.description}</span>
                {itemIndex === index && !shouldReduceMotion && (
                  <motion.span
                    key={`${category.id}-${item.title}`}
                    className="brand-gradient absolute inset-x-0 bottom-0 h-0.5 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-[20px] bg-neutral-200 sm:min-h-[520px] lg:min-h-[740px]">
            <motion.div
              aria-hidden="true"
              className="brand-gradient absolute inset-0"
              animate={{ opacity: imageLoaded ? 0 : [0.45, 0.8, 0.45] }}
              transition={{ duration: 1.4, repeat: imageLoaded ? 0 : Infinity, ease: "easeInOut" }}
            />
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeItem.image}
                className="absolute inset-0"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.985 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={`${basePath}${activeItem.image}`}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 72vw"
                  className="object-cover"
                  onLoad={() => setLoadedImage(activeItem.image)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
