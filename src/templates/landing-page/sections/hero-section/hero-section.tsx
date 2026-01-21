"use client";

import {
  ArrowRight,
  BadgePercent,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { BackgroundCarousel } from "@/components/background-carousel";
import { useState } from "react";
import DiscountModal from "@/components/DiscountModal/DiscountModal";

export function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-screen items-center">
        <BackgroundCarousel />

        <div className="container relative z-20 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-heading-hg text-gray-100">
              Os melhores carros seminovos do mercado em um único lugar
            </h1>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-red-500" />
                <span className="text-body-md text-gray-200">
                  O conforto e a segurança que você precisa
                </span>
              </div>

              <div className="flex items-center gap-2">
                <BadgePercent className="h-4 w-4 text-red-500" />
                <span className="text-body-md text-gray-200">
                  IPVA Grátis!
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Button
                variant="primary"
                className="w-fit rounded-full px-6"
                onClick={() => setOpen(true)}
              >
                Seu desconto está aqui!
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-body-xs text-gray-200">
                Ganhe desconto de até{" "}
                <span className="font-semibold text-red-400">
                  R$ 3.000,00
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <DiscountModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
