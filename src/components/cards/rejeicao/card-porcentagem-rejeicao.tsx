import { type votosCandidatos } from '../SlideCandidatos';
import PorcentagemRejeicaoCandidatos from './rejeicao-candidatos';

export default function CardPorcentagemRejeicao({
  votos
}: {
  votos: votosCandidatos[];
}) {
  return (
    <main className={'card'}>
      <h1 className={'cabecalho'}>Rejeição</h1>

      {votos.map((candidato) => {
        return (
          <PorcentagemRejeicaoCandidatos
            key={candidato.nome}
            image={`/candidatos/${candidato.nome}.png`}
            name={candidato.nome}
            percentage={candidato.porcentagem}
            votes={candidato.votos}
          />
        );
      })}
    </main>
  );
}
