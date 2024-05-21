import styles from './page.module.css';
import Voto from '@/components/cards/voto/Voto';
import SlideCandidatos from '@/components/cards/SlideCandidatos';
import MediaIdadeCard from '@/components/cards/Idade/MediaIdade';

export default function Home() {
  return (
    <main className={styles.main}>
      <SlideCandidatos />
      <Voto />
      <MediaIdadeCard />
    </main>
  );
}
