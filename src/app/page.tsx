import CardPorcentagem from '@/components/cards/porcentagem/card-porcentagem';
import styles from './page.module.css';
import Voto from '@/components/cards/voto/Voto';

export default function Home() {
  return (
    <main className={styles.main}>
      <CardPorcentagem />
      <Voto />
    </main>
  );
}
