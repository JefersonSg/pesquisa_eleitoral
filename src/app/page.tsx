import styles from './page.module.css';
import Voto from '@/components/cards/voto/Voto';
import SlideCandidatos from '@/components/cards/SlideCandidatos';

export default function Home() {
  return (
    <main className={styles.main}>
      <SlideCandidatos />
      <Voto />
    </main>
  );
}
