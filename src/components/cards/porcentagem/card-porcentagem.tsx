import PorcentagemCandidatos from './candidatos';

export default async function CardPorcentagem() {
  return (
    <main className={'card_porcentagem'}>
      <h1 className={'cabecalho'}>Parcial dos candidatos</h1>
      <PorcentagemCandidatos
        image="/candidatos/paulinho.png"
        name="Paulinho da refrigeração"
        percentage="51"
        votes="3255"
      />
      <PorcentagemCandidatos
        image="/candidatos/josias.png"
        name="Josias quintal"
        percentage="51"
        votes="1532"
      />
      <PorcentagemCandidatos
        image="/candidatos/beto.png"
        name="Béto da farmacia"
        percentage="51"
        votes="889"
      />
      <PorcentagemCandidatos
        image="/candidatos/rogerio.png"
        name="Rogério Machado"
        percentage="51"
        votes="784"
      />
      <PorcentagemCandidatos
        image="/candidatos/leonardo.png"
        name="Leonardo da agricultura"
        percentage="51"
        votes="154"
      />
    </main>
  );
}
