export default function AgendeUmaVisitaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <section className="container mx-auto max-w-6xl px-4">
        <header className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Agende sua visita
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Escolha o melhor dia e horário para viver uma experiência exclusiva
            na Lions Seminovos
          </p>
        </header>

        <div className="mx-auto max-w-4xl rounded-3xl bg-white/80 p-10 shadow-xl backdrop-blur">
          <h2 className="mb-8 text-xl font-semibold text-gray-800">
            Dados pessoais
          </h2>

          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nome completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm transition focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm transition focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seuemail@email.com"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm transition focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Loja
              </label>
              <select className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-600 transition focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                <option>Selecione a loja</option>
                <option>Loja mais próxima</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Data
              </label>
              <input
                type="date"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm transition focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Horário
              </label>
              <input
                type="time"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm transition focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div className="md:col-span-2 mt-6 mx-auto">
              <button
                type="submit"
                className="w-56 rounded-lg bg-red-600 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
              >
                Agendar visita
              </button>
            </div>
          </form>
        </div>

        <section className="mt-20 text-center">
          <h3 className="mb-6 text-2xl font-bold tracking-wide text-gray-900">
            A LIONS ESTÁ COM VOCÊ EM CADA ENCONTRO
          </h3>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600">
            Na LIONS, cada visita é pensada para você. Um momento exclusivo,
            com atendimento humano e atenção aos detalhes que realmente importam.
            Aqui, você não é apenas mais um horário na agenda — é alguém com
            planos, dúvidas e expectativas que merecem ser respeitadas.
            <br />
            <br />
            Agende quando for melhor para você. Estamos prontos para receber,
            ouvir e ajudar no que for preciso.
          </p>
        </section>
      </section>
    </main>
  );
}
