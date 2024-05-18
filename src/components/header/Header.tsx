import Image from 'next/image';
import styles from './header.module.css';

export default function HeaderContainer() {
  return (
    <header className={styles.header_container}>
      <div className={styles.texto_header}>
        PESQUISA ELEITORAL <br />
        SANTO ANTÔNIO DE PÁDUA
      </div>
      <Image
        className={styles.logo}
        alt="imagem da logo"
        src={'/logo.svg'}
        width={70}
        height={35}
      />
    </header>
  );
}
