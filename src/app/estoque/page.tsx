'use client';

import { cars } from '@/data/cars';
import Image from 'next/image';
import Link from 'next/link';

export default function EstoquePage() {
  return (
    <main className="bg-gray-100 py-12">
      <section className="container mx-auto px-4">
        <h1 className="mb-10 text-3xl font-bold text-gray-800">
          Estoque de Seminovos Lions
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={car.link} className="block">
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900">{car.name}</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    {car.brand} • {car.year} • {car.km}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {car.fuel} • {car.bodyType}
                  </p>
                </div>
              </Link>

              <div className="p-4 mt-2 flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full rounded-md bg-red-600 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-700"
                >
                  SIMULAR
                </button>

                <a
                  href="https://api.whatsapp.com/send/?phone=558004540505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mx-auto w-fit text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-red-700"
                >
                  Falar com atendente
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/estoque?pagina=1"
            className="rounded-md border px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-red-500 hover:text-white"
          >
            Anterior
          </Link>
          <Link
            href="/estoque?pagina=2"
            className="rounded-md border px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-red-500 hover:text-white"
          >
            Próxima
          </Link>
        </div>
      </section>
    </main>
  );
}
