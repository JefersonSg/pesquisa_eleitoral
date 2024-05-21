import PorcentagemRejeicaoCandidatos from './rejeicao-candidatos';

export default function CardPorcentagemRejeicao() {
  return (
    <main className={'card'}>
      <h1 className={'cabecalho'}>Rejeição</h1>
      <PorcentagemRejeicaoCandidatos
        image="/candidatos/paulinho.png"
        name="Paulinho da refrigeração"
        percentage="51"
        votes="3255"
      />
      <PorcentagemRejeicaoCandidatos
        image="/candidatos/josias.png"
        name="Josias quintal"
        percentage="51"
        votes="1532"
      />
      <PorcentagemRejeicaoCandidatos
        image="/candidatos/beto.png"
        name="Béto da farmacia"
        percentage="51"
        votes="889"
      />
      <PorcentagemRejeicaoCandidatos
        image="/candidatos/rogerio.png"
        name="Rogério Machado"
        percentage="51"
        votes="784"
      />
      <PorcentagemRejeicaoCandidatos
        image="/candidatos/leonardo.png"
        name="Leonardo da agricultura"
        percentage="51"
        votes="154"
      />
    </main>
  );
}
