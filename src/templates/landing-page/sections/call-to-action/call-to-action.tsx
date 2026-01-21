import { ArrowRight, Car } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';

export function CallToAction() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-red-900/20 to-gray-700">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-red-400 w-fit rounded-full">
        <Car className="text-gray-900" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-sans text-gray-100 text-balance text-heading-xl">
            Encontre o carro ideal com segurança e as melhores condições
          </h2>

          <Button variant="primary" asChild className="mt-6">
            <Link href="/estoque">
              Ver estoque disponível
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
