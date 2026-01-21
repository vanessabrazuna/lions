import Image from 'next/image';

const customerStories = [
  {
    content:
      'Fui muito bem atendido desde o primeiro contato. O carro estava exatamente como anunciado, todo revisado e com a documentação em dia. Compra tranquila e sem surpresas.',
    author: {
      name: 'Carlos Henrique',
      role: 'Cliente Lions Seminovos',
      avatar: '/assets/customer-02.png',
    },
  },
  {
    content:
      'Excelente experiência. Me ajudaram a encontrar o carro ideal dentro do meu orçamento e ainda conseguiram ótimas condições de pagamento. Recomendo sem dúvidas.',
    author: {
      name: 'Mariana Souza',
      role: 'Cliente Lions Seminovos',
      avatar: '/assets/customer-01.png',
    },
  },
];

export function CustomerStorySection() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-sans text-heading-xl text-gray-100">
          Quem compra na Lions Seminovos, recomenda
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStories.map((customerStory) => (
            <div
              key={customerStory.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12"
            >
              <p className="text-balance text-gray-200">
                {customerStory.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={customerStory.author.avatar}
                    alt={customerStory.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {customerStory.author.name}
                  </strong>
                  <span className="text-xs text-gray-300">
                    {customerStory.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
