import type { Metadata } from "next";
import "../styles/globals.css";
import Script from "next/script";
import localFont from "next/font/local";

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

export const metadata: Metadata = {
  title: "Harumia Confeitaria® | Brownies, Cookies e Cheesecakes'",
  description: "Harumia Confeitaria® | Brownies, Cookies e Cheesecakes'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NWGB6X4');
        `}
        </Script>
      </head>
      <body
        className={`${clashDisplay.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NWGB6X4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
