import type { Metadata } from 'next';
import './globals.css';
import HeaderContainer from '@/components/header/Header';
import { typeFirst } from '@/functions/fonts/fonts';

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
      <body className={`${typeFirst.className}`}>
        <HeaderContainer />
        {children}
      </body>
    </html>
  );
}
