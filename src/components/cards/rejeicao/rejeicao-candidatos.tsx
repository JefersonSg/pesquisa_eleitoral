import Image from 'next/image';
import styles from './candidatos.module.css';

export default function PorcentagemRejeicaoCandidatos({
  image,
  name,
  percentage,
  votes
}: {
  image: string;
  name: string;
  percentage: string;
  votes: number;
}) {
  return (
    <div className={styles.candidato_container}>
      <Image
        className={styles.foto_candidato}
        alt="imagem do candidato"
        src={image}
        width={42}
        height={42}
      />
      <div className={styles.infos}>
        <p className={styles.nome}>{name}</p>
        <div className={styles.container_porcentagem}>
          <div className={styles.porcentagem_grafico}>
            <span
              className={styles.porcentagem}
              style={{ width: `${percentage}%` }}
            ></span>
          </div>
          <p className={styles.porcentagem_escrita}>{percentage}%</p>
        </div>
        <p className={styles.votos}>{votes} votos</p>
      </div>
    </div>
  );
}
