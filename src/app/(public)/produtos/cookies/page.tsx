import ProductCard from "@/components/elements/ProductCard";
import { cookies } from "@/data/products";
import Link from "next/link";

export default function CookiesPage() {
    return (
        <main className="py-12 bg-brand-beige/40 min-h-screen">
            <div className="container mx-auto px-4">
                <header className="mb-8 text-center">
                    <h1 className="font-clash text-3xl sm:text-4xl font-extrabold text-brand-brown">Cookies</h1>
                    <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-brand-brown/90">
                        Crocantes por fora, macios por dentro — escolha seu sabor favorito.
                    </p>
                    <div className="mt-4">
                        <Link href="/produtos" className="text-sm font-medium text-brand-brown underline-offset-4 hover:underline">
                            Ver todos os produtos
                        </Link>
                    </div>
                </header>

                <section>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {cookies.map((p) => (
                            <ProductCard key={p.name} {...p} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
