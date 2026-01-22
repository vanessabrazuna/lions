# Lions

![Descrição](https://i.postimg.cc/CLFbj8C4/lions.png)

Projeto desenvolvido com **Next.js 14**, utilizando **React 19**, **TypeScript** e **Tailwind CSS v3**, seguindo o padrão **App Router**.

---

## Stack e Tecnologias

* **Next.js** 14.2.35
* **React** 19.2.3
* **TypeScript** 5
* **Tailwind CSS** 3.4.1
* **React Hook Form** + **Zod** (validação de formulários)
* **Radix UI (Slot)**
* **Lucide Icons**
* **Embla Carousel**
* **ESLint** (configuração oficial do Next.js)
* **next-contentlayer**
* **react-markdown** + **remark-gfm**
* **clsx**, **tailwind-merge**, **class-variance-authority**
* **tailwindcss-animate**

---

## Pré-requisitos

* Node.js 20 ou superior
* Gerenciador de pacotes: npm, yarn, pnpm ou bun

---

## Instalação

Instale as dependências do projeto:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

---

## Ambiente de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## Scripts Disponíveis

* `dev` – inicia o servidor de desenvolvimento
* `build` – gera o build de produção
* `start` – inicia o servidor em modo produção
* `lint` – executa o ESLint

---

## Estrutura do Projeto

O projeto utiliza o **App Router** do Next.js:

```
app/
 ├─ layout.tsx
 ├─ page.tsx
 └─ components/
 ├─ data/
 └─ templates/
public/
```

As páginas são definidas diretamente dentro da pasta `app/`, seguindo o padrão do Next.js 14.

---

## Estilos e UI

* **Tailwind CSS v3** para estilização
* Utilização de utilitários como `clsx`, `tailwind-merge` e `class-variance-authority`
* Componentes desacoplados e reutilizáveis
* Animações com `tailwindcss-animate`

---

## Fontes

O projeto utiliza o `next/font` para otimização automática de fontes, garantindo melhor performance e carregamento.

---

## Build e Produção

Para gerar o build de produção:

```bash
pnpm run build
```

Para executar o projeto em produção:

```bash
pnpm start
```

---

## Documentação

* Next.js: [https://nextjs.org/docs](https://nextjs.org/docs)
* React: [https://react.dev](https://react.dev)
* Tailwind CSS: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
