import { Logo } from "@/components/elements/logos/Logo";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex items-center justify-center py-2 border-b border-gray-200">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo width={48} height={48} />
                        <span className="font-clash text-2xl font-bold text-brand-brown">harumia<sup>®</sup></span>
                    </Link>
                </div>
            </div>
        </header>
    )
}