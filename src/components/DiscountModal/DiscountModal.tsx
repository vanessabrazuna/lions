"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";

const discountSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .regex(/^\d+$/, "Use apenas números"),
  email: z.string().email("Email inválido"),
  store: z.string().min(1, "Selecione uma loja"),
});

type DiscountFormData = z.infer<typeof discountSchema>;

interface DiscountModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DiscountModal({ open, onClose }: DiscountModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DiscountFormData>({
    resolver: zodResolver(discountSchema),
  });

  const firstInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      firstInputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const onSubmit = async (data: DiscountFormData) => {
    console.log("Dados do formulário:", data);
    reset();
    onClose();
  };

  // Função para permitir Enter / Space no overlay
  const handleOverlayKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        tabIndex={0}
        onKeyDown={handleOverlayKeyDown}
        role="button"
        aria-label="Fechar modal"
      />

      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Ganhe um desconto de até
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-red-600">
            R$ 3.000,00
          </h2>

          <div className="mt-4 flex justify-center">
            <Image
              src="/assets/cars.png"
              alt="Carros em promoção"
              width={280}
              height={120}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          <div>
            <input
              {...register("name")}
              ref={(e) => {
                register("name").ref(e);
                firstInputRef.current = e;
              }}
              type="text"
              placeholder="Seu nome"
              className="h-12 w-full rounded-full border border-gray-300 px-5 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            {errors.name && (
              <p className="mt-1 ml-3 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Telefone"
              className="h-12 w-full rounded-full border border-gray-300 px-5 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            {errors.phone && (
              <p className="mt-1 ml-3 text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="h-12 w-full rounded-full border border-gray-300 px-5 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            {errors.email && (
              <p className="mt-1 ml-3 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <select
              {...register("store")}
              className="h-12 w-full rounded-full border border-gray-300 px-5 text-sm text-gray-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="">Selecione uma loja</option>
              <option>Lions Seminovos Nova Iguaçu</option>
              <option>Lions Seminovos Duque de Caxias</option>
              <option>Lions Seminovos Intendente Magalhães</option>
              <option>Lions Seminovos Niterói</option>
              <option>Lions Seminovos Barra Mansa</option>
              <option>Lions Seminovos Campo Grande</option>
              <option>Lions Seminovos Vila Prudente</option>
              <option>Lions Seminovos Osasco</option>
              <option>Lions Seminovos Santo Amaro</option>
              <option>Lions Seminovos São Bernardo do Campo</option>
              <option>Lions Seminovos São Miguel</option>
            </select>
            {errors.store && (
              <p className="mt-1 ml-3 text-xs text-red-500">{errors.store.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full rounded-full bg-red-500 py-4 text-sm font-semibold uppercase tracking-wide hover:text-white transition hover:bg-red-600"
          >
            {isSubmitting ? "Enviando..." : "Solicitar"}
          </Button>
        </form>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 transition hover:text-gray-600"
          aria-label="Fechar modal"
        >
          X
        </button>
      </div>
    </div>
  );
}
