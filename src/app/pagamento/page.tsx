'use client';

import { Logo } from '@/components/elements/logos/Logo';
import { useState } from 'react';
import { TbCheck, TbCopy } from 'react-icons/tb';
import localFont from 'next/font/local';

export default function PagamentoPage() {
    const [copied, setCopied] = useState(false);
    const pixEmail = "harumia.confeitaria@gmail.com";

    const handleCopyCode = async () => {
        try {
            await navigator.clipboard.writeText(pixEmail);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Erro ao copiar código:", err);
        }
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">


            {/* Content */}
            <div className="relative w-full max-w-md flex flex-col items-center gap-8">
                <Logo className="w-18" />

                <div className="w-full flex flex-col items-center gap-4 text-center">
                    <h1 className="text-2xl font-bold mb-6 font-clash tracking-tight text-brand-brown">
                        Pague com PIX
                    </h1>
                    <p className="text-sm text-gray-600 max-w-xs">
                        Copie o email abaixo e cole no aplicativo do seu banco para pagar via PIX
                    </p>
                </div>

                <div className="w-full flex items-stretch gap-3">
                    <div className="relative flex-1 group">
                        <input
                            type="text"
                            value={pixEmail}
                            readOnly
                            className="w-full border-2 border-brand-brown/30 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white/80 backdrop-blur-sm shadow-sm focus:outline-none focus:border-brand-brown/50 transition-all group-hover:border-brand-brown/40"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-green/5 to-brand-brown/5 -z-10 group-hover:from-brand-green/10 group-hover:to-brand-brown/10 transition-all" />
                    </div>
                    <button
                        onClick={handleCopyCode}
                        className="relative px-5 py-3 rounded-lg cursor-pointer bg-brand-green text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-green to-brand-green/90 opacity-0 hover:opacity-100 transition-opacity" />
                        <div className="relative">
                            {copied ? <TbCheck size={20} /> : <TbCopy size={20} />}
                        </div>
                    </button>
                </div>

                {/* <p className="text-sm text-gray-500">
                    Após o pagamento, você receberá uma confirmação por email
                </p> */}
            </div>

            <style jsx global>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animation-delay-6000 {
                    animation-delay: 6s;
                }
            `}</style>
        </div>
    );
}
