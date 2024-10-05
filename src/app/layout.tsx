import type { Metadata } from 'next';
import './globals.css';
import HeaderContainer from '@/components/header/Header';
import { typeFirst } from '@/functions/fonts/fonts';
import Providers from '@/shared/providers/providers';

export const metadata: Metadata = {
  title: 'Pesquisa Eleitoral PALMA 2024',
  description:
    'Insira seu voto em seu candidato, Veja a parcial dos candidatos a prefeito de Palma, e outras estatísticas',
  keywords: [
    'Pesquisa eleitoral Palma',
    'Santo antônio de Palma',
    'Pesquisa eleitoral 2024 Santo Antônio de Palma'
  ],
  icons: 'https://mayse-bucket-site.s3.sa-east-1.amazonaws.com/capasite2.png',
  openGraph: {
    url: 'https://pesquisaeleitoral.vercel.app/',
    siteName: 'Pesquisa Eleitoral Palma 2024',
    title: 'Pesquisa Eleitoral Palma 2024',
    description:
      'Insira seu voto em seu candidato, Veja a parcial dos candidatos a prefeito de Palma, e outras estatísticas',
    images: 'https://mayse-bucket-site.s3.sa-east-1.amazonaws.com/capasite2.png'
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
