import type { Metadata } from 'next';
import './globals.css';
import HeaderContainer from '@/components/header/Header';
import { typeFirst } from '@/functions/fonts/fonts';

export const metadata: Metadata = {
  title: 'Pesquisa Eleitoral Pádua 2024',
  description:
    'Insira seu voto em seu candidato, Veja a parcial dos candidatos a prefeito de Pádua, e outras estatísticas',
  keywords: [
    'Pesquisa eleitoral Pádua',
    'Santo antônio de Pádua',
    'Pesquisa eleitoral 2024 Santo Antônio de Pádua'
  ],
  icons:
    'https://mayse-bucket-site.s3.sa-east-1.amazonaws.com/capapesquisa.png',
  openGraph: {
    url: 'https://pesquisaeleitoral.vercel.app/',
    siteName: 'Pesquisa Eleitoral Pádua 2024',
    title: 'Pesquisa Eleitoral Pádua 2024',
    description:
      'Insira seu voto em seu candidato, Veja a parcial dos candidatos a prefeito de Pádua, e outras estatísticas',
    images:
      'https://mayse-bucket-site.s3.sa-east-1.amazonaws.com/capapesquisa.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8457030371423171"
        crossOrigin="anonymous"
      ></script>
      <meta
        name="google-adsense-account"
        content="ca-pub-8457030371423171"
      ></meta>
      <body className={`${typeFirst.className}`}>
        <HeaderContainer />
        {children}
      </body>
    </html>
  );
}
