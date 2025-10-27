export type Product = {
    name: string;
    imageUrl: string;
    price: string;
    description?: string;
    unitLabel?: string;
    availableForOrder?: boolean;
    whatsappText?: string;
    category: "brownies" | "cookies";
};

const brandImg = (text: string) =>
    `https://placehold.co/600x600/fde8ef/4f3a29.png?text=${encodeURIComponent(text)}`;

export const brownies: Product[] = [
    {
        name: "Brownie Fudge",
        imageUrl: brandImg("Brownie Fudge"),
        price: "R$ 18,30",
        description: "Clássico e úmido, com camada intensa de chocolate meio amargo.",
        unitLabel: "unidade 60g",
        availableForOrder: true,
        whatsappText:
            "Olá! Gostaria de encomendar o Brownie Fudge (unidade 60g). Vi no site e quero mais detalhes, por favor.",
        category: "brownies",
    },
    {
        name: "Brownie Red Velvet",
        imageUrl: brandImg("Brownie Red Velvet"),
        price: "R$ 23,80",
        description: "Massa aveludada com toque de cacau e cobertura cremosa.",
        unitLabel: "unidade 60g",
        whatsappText:
            "Olá! Tenho interesse no Brownie Red Velvet (unidade 60g). Poderiam me informar disponibilidade?",
        category: "brownies",
    },
    {
        name: "Blondie",
        imageUrl: brandImg("Blondie"),
        price: "R$ 19,50",
        description: "Versão branca do brownie, com notas de baunilha e caramelo.",
        unitLabel: "unidade 60g",
        availableForOrder: true,
        whatsappText: "Oi! Gostaria de informações sobre o Blondie (unidade 60g).",
        category: "brownies",
    },
    {
        name: "Brookie",
        imageUrl: brandImg("Brookie"),
        price: "R$ 17,80",
        description: "Metade brownie, metade cookie: o melhor dos dois mundos!",
        unitLabel: "unidade 70g",
        availableForOrder: true,
        whatsappText: "Oi! Quero saber sobre o Brookie (unidade 70g). Vocês fazem encomenda?",
        category: "brownies",
    },
    {
        name: "Brownie com Ganache de Chocolate",
        imageUrl: brandImg("Brownie com Ganache"),
        price: "R$ 22,10",
        description: "Cobertura de ganache belga super cremosa.",
        unitLabel: "unidade 80g",
        whatsappText:
            "Olá! Vi o Brownie com Ganache de Chocolate (unidade 80g). Podem me enviar mais informações?",
        category: "brownies",
    },
    {
        name: "Brownie Zero Açúcar",
        imageUrl: brandImg("Brownie Zero Açúcar"),
        price: "R$ 24,90",
        description: "Sem adição de açúcar, com muito sabor.",
        unitLabel: "unidade 60g",
        whatsappText:
            "Olá! Gostaria de saber mais sobre o Brownie Zero Açúcar (unidade 60g).",
        category: "brownies",
    },
];

export const cookies: Product[] = [
    {
        name: "Cookie Tradicional",
        imageUrl: brandImg("Cookie Tradicional"),
        price: "R$ 9,90",
        description: "Crosta crocante e miolo macio.",
        unitLabel: "unidade 60g",
        availableForOrder: true,
        whatsappText: "Olá! Quero pedir o Cookie Tradicional (unidade 60g).",
        category: "cookies",
    },
    {
        name: "Cookie com Gotas de Chocolate",
        imageUrl: brandImg("Cookie com Gotas"),
        price: "R$ 11,50",
        description: "Cheio de gotas de chocolate ao leite.",
        unitLabel: "unidade 60g",
        whatsappText:
            "Oi! Tenho interesse no Cookie com Gotas de Chocolate (unidade 60g).",
        category: "cookies",
    },
    {
        name: "Cookie de Chocolate",
        imageUrl: brandImg("Cookie de Chocolate"),
        price: "R$ 11,90",
        description: "Massa de chocolate com cacau nobre.",
        unitLabel: "unidade 60g",
        availableForOrder: true,
        whatsappText: "Olá! Gostaria do Cookie de Chocolate (unidade 60g).",
        category: "cookies",
    },
    {
        name: "Cookie Red Velvet",
        imageUrl: brandImg("Cookie Red Velvet"),
        price: "R$ 12,50",
        description: "Vermelhinho e macio, com toque de cacau.",
        unitLabel: "unidade 60g",
        whatsappText: "Oi! Me fale mais sobre o Cookie Red Velvet (unidade 60g).",
        category: "cookies",
    },
];

export const allProducts: Product[] = [...brownies, ...cookies];

export const categories = [
    { key: "brownies" as const, name: "Brownies", href: "/produtos/brownies" },
    { key: "cookies" as const, name: "Cookies", href: "/produtos/cookies" },
];
