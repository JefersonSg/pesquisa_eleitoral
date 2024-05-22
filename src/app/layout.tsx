import type { Metadata } from 'next';
import './globals.css';
import HeaderContainer from '@/components/header/Header';
import { typeFirst } from '@/functions/fonts/fonts';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Pesquisa Eleitoral Pádua 2024',
  description:
    'Insira seu voto em seu candidato, Veja a parcial dos candidatos a prefeito de Pádua, e outras estatísticas'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8457030371423171"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={`${typeFirst.className}`}>
        <HeaderContainer />
        {children}
      </body>
    </html>
  );
}
