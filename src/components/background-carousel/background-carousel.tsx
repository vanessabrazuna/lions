"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  "/assets/foto-19645-desktop.webp",
  "/assets/foto-28275-desktop.webp",
  "/assets/foto-28419-desktop.webp",
  "/assets/foto-43088-desktop.webp",
  "/assets/foto-92727-desktop.webp",
];

export function BackgroundCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((src) => (
          <div
            key={src}
            className="relative flex-[0_0_100%] h-full"
          >
            <Image
              src={src}
              alt="Banner"
              fill
              priority={src === images[0]}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
};
