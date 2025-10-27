import { Logo } from "@/components/elements/logos/Logo";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export function Header() {
    return (
        <header className="flex items-center justify-center py-2 border-b border-gray-200">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo width={48} height={48} />
                        <span className="font-clash text-2xl font-bold text-brand-brown">harumia<sup>®</sup></span>
                    </Link>
                    <div>
                        <nav>
                            <ul className="flex gap-6">
                                {menuLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-gray-700 hover:text-brand-brown">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <a
                        className="flex items-center gap-2"
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span>
                            <BsWhatsapp size={16} />
                        </span>
                        Faça seu pedido
                    </a>
                </div>

            </div>
        </header>
    )
}

const menuLinks = [
    {
        label: 'Início',
        href: '/'
    },
    {
        label: 'Produtos',
        href: '/produtos'
    },
    {
        label: 'Sobre Nós',
        href: '/sobre-nos'
    },
    {
        label: 'Blog',
        href: '/blog'
    },
    {
        label: 'Contato',
        href: '/contato'
    }
];