import { HeartHandshake, Car, ShieldCheck } from 'lucide-react';

export function SupportSection() {
  return (
    <section className="relative pb-8 md:py-10 bg-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container flex flex-col items-center gap-12 relative">
        <h2 className="font-sans text-balance text-center text-heading-xl text-gray-100">
          Comprar seu seminovo ficou mais simples, seguro e transparente
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-red-500">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-400 mb-4">
              <Car className="h-6 w-6 text-gray-900" />
            </div>
            <strong className="text-heading-sm text-gray-900">
              Estoque selecionado
            </strong>
            <p className="text-body-sm text-gray-900/80">
              Veículos seminovos revisados, com procedência e prontos para você
              sair dirigindo.
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-gray-600">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-500 mb-4">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Compra segura
            </strong>
            <p className="text-body-sm text-gray-200">
              Transparência total na negociação, documentação em dia e suporte
              em todas as etapas da compra.
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-red-500">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-400 mb-4">
              <HeartHandshake className="h-6 w-6 text-gray-900" />
            </div>
            <strong className="text-heading-sm text-gray-900">
              Atendimento humanizado
            </strong>
            <p className="text-body-sm text-gray-900/80">
              Especialistas prontos para ajudar você a encontrar o carro ideal
              com as melhores condições.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
