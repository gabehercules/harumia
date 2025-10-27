import ProductCard from "@/components/elements/ProductCard";
import { allProducts, categories } from "@/data/products";
import Link from "next/link";

export default function ProdutosPage() {
    return (
        <main className="py-12 bg-brand-beige/40 min-h-screen">
            <div className="container mx-auto px-4">
                <header className="mb-8 text-center">
                    <h1 className="font-clash text-3xl sm:text-4xl font-extrabold text-brand-brown">Produtos</h1>
                    <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-brand-brown/90">
                        Conheça todos os nossos brownies e cookies. Feitos com ingredientes selecionados e muito carinho.
                    </p>
                </header>

                <nav className="mb-8 flex flex-wrap items-center justify-center gap-3">
                    {categories.map((c) => (
                        <Link
                            key={c.key}
                            href={c.href}
                            className="inline-flex items-center rounded-full border border-brand-brown/30 bg-white px-4 py-2 text-sm font-medium text-brand-brown hover:bg-brand-beige/60"
                        >
                            {c.name}
                        </Link>
                    ))}
                </nav>

                <section>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {allProducts.map((p) => (
                            <ProductCard key={`${p.category}-${p.name}`} {...p} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

