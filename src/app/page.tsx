'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/elements/logos/Logo";
import localFont from 'next/font/local';

const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Variable.woff2',
      weight: '200 700',
      style: 'normal',
    }
  ],
  variable: '--font-clash',
});

export default function Home() {
  return (
    <main className={`min-h-screen flex items-center justify-center bg-[var(--color-brand-beige)] px-4 ${clashDisplay.variable}`}>
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 mx-auto"
        >
          <Logo width={200} height={200} className="mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-brand-brown)] font-clash tracking-tight"
          style={{ fontVariationSettings: "'wght' 600" }}
        >
          Harumia Confeitaria
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-12 text-[var(--color-brand-brown)]/80 max-w-2xl mx-auto font-clash"
          style={{ fontVariationSettings: "'wght' 400" }}
        >
          Brownies, cookies e cheesecakes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="relative group"
        >
          <motion.div
            className="absolute inset-0 bg-[var(--color-brand-rose)]/20 rounded-[2rem] blur-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.div
            className="relative"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-rose)]/30 to-[var(--color-brand-green)]/30 rounded-[2rem]"
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
            />
            <Link
              href="https://wa.me/5511944801999"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-sm border border-[var(--color-brand-brown)]/10 shadow-[0_0_0_1px_rgba(79,58,41,0.05)]"
            >
              <motion.div
                className="relative px-8 py-4 flex items-center justify-center gap-3 before:absolute before:inset-0 before:border before:border-[var(--color-brand-brown)]/5 before:rounded-[2rem] before:pointer-events-none"
                variants={{
                  initial: { y: 0 },
                  hover: { y: -2 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.span
                  className="relative z-10 text-lg font-medium bg-gradient-to-r from-[var(--color-brand-brown)] to-[var(--color-brand-brown)]/80 bg-clip-text text-transparent"
                  variants={{
                    initial: { opacity: 1 },
                    hover: { opacity: 0.8 }
                  }}
                >
                  Faça seu pedido pelo WhatsApp
                </motion.span>
                <motion.div
                  className="relative z-10"
                  variants={{
                    initial: { x: 0, rotate: 0 },
                    hover: { x: 4, rotate: 12 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-[var(--color-brand-green)]"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-rose)]/10 to-[var(--color-brand-green)]/10"
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-sm text-[var(--color-brand-brown)]/40 font-sans"
        >
          Site em desenvolvimento
        </motion.p>
      </div>
    </main>
  );
}
