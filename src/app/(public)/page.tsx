"use client";

import Image from "next/image";
import Link from "next/link";

const novidadesImage = "/novidades.jpg";


import ProductCard from "@/components/elements/ProductCard";

const products = [
  {
    name: "Brownie Fudge",
    imageUrl: "https://placehold.co/600x600/fde8ef/4f3a29.png?text=Brownie+Fudge",
    price: "R$ 18,30",
    description: "Clássico e úmido, com camada intensa de chocolate meio amargo.",
    unitLabel: "unidade 60g",
    availableForOrder: true,
    whatsappText: "Olá! Gostaria de encomendar o Brownie Fudge (unidade 60g). Vi no site e quero mais detalhes, por favor.",
  },
  {
    name: "Brownie Red Velvet",
    imageUrl: "https://placehold.co/600x600/fde8ef/4f3a29.png?text=Red+Velvet",
    price: "R$ 23,80",
    description: "Massa aveludada com toque de cacau e cobertura cremosa.",
    unitLabel: "unidade 60g",
    whatsappText: "Olá! Tenho interesse no Brownie Red Velvet (unidade 60g). Poderiam me informar disponibilidade?",
  },
  {
    name: "Brookie",
    imageUrl: "https://placehold.co/600x600/fde8ef/4f3a29.png?text=Brookie",
    price: "R$ 17,80",
    description: "Metade brownie, metade cookie: o melhor dos dois mundos!",
    unitLabel: "unidade 70g",
    availableForOrder: true,
    whatsappText: "Oi! Quero saber sobre o Brookie (unidade 70g). Vocês fazem encomenda?",
  },
  {
    name: "Brownie Recheado",
    imageUrl: "https://placehold.co/600x600/fde8ef/4f3a29.png?text=Brownie+Recheado",
    price: "R$ 22,10",
    description: "Recheado com ganache de chocolate belga, super cremoso.",
    unitLabel: "unidade 80g",
    whatsappText: "Olá! Vi o Brownie Recheado (unidade 80g) no site. Podem me enviar mais informações?",
  },
];

export default function Home() {
  return (
    <main>
      <section>
        <Link href="/vitrine-da-semana">
          <Image src={novidadesImage} alt="Vitrine da Semana" width={1920} height={300} className="w-full" />
        </Link>
      </section>
      <section className="py-14 bg-brand-beige/40">
        <div className="container mx-auto px-4">
          <h2 className="font-clash text-center text-3xl font-extrabold text-brand-brown sm:text-4xl">Mais Pedidos</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base font-medium text-brand-brown/90 sm:text-lg">Fornadas recém assadas, prontas para serem saboreadas.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-brand-beige/30">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl border border-brand-beige/60 bg-white/90 backdrop-blur-sm shadow-sm">
            <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
              <div className="order-2 md:order-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/20 px-3 py-1 text-xs font-semibold text-brand-brown">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-green animate-pulse" />
                  Estamos abertos - Peça já!
                </span>
                <h2 className="mt-3 font-clash text-3xl font-extrabold text-brand-brown sm:text-4xl">
                  Estamos no iFood e 99Food
                </h2>
                <p className="mt-3 max-w-prose text-base text-brand-brown/80 sm:text-lg">
                  Receba nossos doces com praticidade pelos apps de delivery. Escolha sua plataforma favorita e faça seu pedido.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-rose px-6 py-3 font-bold text-brand-brown shadow-sm transition-colors hover:bg-brand-rose/90"
                    aria-label="Pedir no iFood"
                  >
                    Pedir no iFood
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg border border-brand-brown/30 px-6 py-3 font-semibold text-brand-brown transition-colors hover:bg-brand-beige/60"
                    aria-label="Pedir no 99Food"
                  >
                    Pedir no 99Food
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://placehold.co/640x420/fde8ef/4f3a29.png?text=Delivery+Online"
                  alt="Pedidos por aplicativos"
                  width={640}
                  height={420}
                  className="h-auto w-full rounded-xl object-cover shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
