'use client';

import React from 'react';
import styles from './form-infos.module.css';
import ConfirmLottie from '@/components/lottie/Confirm';
import AwaitLottie from '@/components/lottie/Await';
import { createNewVote } from '@/actions/prisma';
import Preencha from './Preencha';
import JaVotou from './jaVotou';
import { type candidatos } from '../Voto';
import { useQuery } from '@tanstack/react-query';

const Formulario = ({
  setAtivo,
  nomeVoto,
  candidatos
}: {
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
  nomeVoto: string;
  candidatos: candidatos[];
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const [cidade, setCidade] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [genero, setGenero] = React.useState('');
  const [rejeicao, setRejeicao] = React.useState('');
  const [preencha, setPreencha] = React.useState(false);
  const [jaVotou, setJaVotou] = React.useState(false);
  const { refetch } = useQuery({
    queryKey: ['votos']
  });

  async function onSubmit() {
    if (!cidade || !idade || !genero || !rejeicao) {
      setPreencha(true);
      return;
    }

    setIsLoading(true);

    const response = await createNewVote({
      cidade,
      idade,
      nomeVoto,
      genero,
      rejeicao
    });

    setIsLoading(false);

    if (response.jaVotou) {
      setJaVotou(true);
      return;
    }
    if (response.message) {
      setIsLoading(false);
      setTimeout(() => {
        setSaved(true);
        void refetch();
        scroll({ top: 0 });
      }, 3000);
    }
  }

  return (
    <>
      <form className={styles.formulario}>
        <div className={styles.distrito}>
          <label htmlFor="distrito">Aonde você mora? Cidade / Distrito</label>
          <select
            name="distrito"
            id="distrito"
            value={cidade}
            required
            onChange={(e) => {
              setCidade(e.target.value);
            }}
          >
            <option value="" style={{ display: 'none' }}>
              selecione
            </option>
            <option value="Palma">Palma</option>
            <option value="Itaperuçu">Itaperuçu</option>
            <option value="Cisneiros">Cisneiros</option>
          </select>
        </div>
        <div className={styles.idade}>
          <label htmlFor="idade">Qual a sua idade?</label>
          <div>
            <input
              type="radio"
              name="idade"
              id="16 a 24 anos"
              value={'16-24'}
              checked={idade === '16-24'}
              onChange={(e) => {
                setIdade('16-24');
              }}
            />
            <label htmlFor="16 a 24 anos">16 a 24 anos</label>
          </div>
          <div>
            <input
              type="radio"
              name="idade"
              id="25 a 34 anos"
              value={'25-34'}
              checked={idade === '25-34'}
              onChange={(e) => {
                setIdade('25-34');
              }}
            />
            <label htmlFor="25 a 34 anos">25 a 34 anos</label>
          </div>
          <div>
            <input
              type="radio"
              name="idade"
              id="35 a 44 anos"
              value={'35-44'}
              checked={idade === '35-44'}
              onChange={(e) => {
                setIdade('35-44');
              }}
            />
            <label htmlFor="35 a 44 anos">35 a 44 anos</label>
          </div>
          <div>
            <input
              type="radio"
              name="idade"
              id="45 a 59 anos"
              value={'45-59'}
              checked={idade === '45-59'}
              onChange={(e) => {
                setIdade('45-59');
              }}
            />
            <label htmlFor="45 a 59 anos">45 a 59 anos</label>
          </div>
          <div>
            <input
              type="radio"
              name="idade"
              id="60 ou mais"
              value={'60'}
              checked={idade === '60'}
              onChange={(e) => {
                setIdade('60');
              }}
            />
            <label htmlFor="60 ou mais">60 ou mais</label>
          </div>
        </div>
        <div className={styles.genero}>
          <label htmlFor="genero">Qual o seu gênero</label>
          <select
            name="genero"
            id="genero"
            required
            value={genero}
            onChange={(e) => {
              setGenero(e.target.value);
            }}
          >
            <option value="" style={{ display: 'none' }}>
              selecione
            </option>
            <option value="homem">Homem</option>
            <option value="mulher">Mulher</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className={styles.distrito}>
          <label htmlFor="distrito">
            Em quem você não votaria de jeito nenhum?
          </label>
          <select
            name="distrito"
            id="distrito"
            required
            value={rejeicao}
            onChange={(e) => {
              setRejeicao(e.target.value);
            }}
          >
            <option value="" style={{ display: 'none' }}>
              selecione
            </option>
            {candidatos.map((candidato, index) => {
              if (candidato.nome === nomeVoto) {
                return '';
              }
              return (
                <option key={candidato.id + index} value={candidato.nome}>
                  {candidato.nome}
                </option>
              );
            })}

            <option value="">Nenhuma das opções</option>
          </select>
        </div>
        <button
          className={styles.botao_confirm}
          onClick={(e) => {
            e.preventDefault();

            void onSubmit();
          }}
        >
          Confirmar
        </button>
      </form>
      {isLoading && (
        <div className={styles.await}>
          <AwaitLottie />
        </div>
      )}
      {saved && (
        <div className={styles.confirm}>
          <div className={styles.infos}>
            seu voto foi computado
            <ConfirmLottie />
            <button
              className={styles.botao_confirm}
              onClick={() => {
                setSaved(false);
                setIsLoading(false);
                setAtivo('');
                window.location.reload();
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
      {preencha && (
        <div
          className={styles.preencha}
          onClick={() => {
            setPreencha(false);
          }}
        >
          <Preencha />
        </div>
      )}

      {jaVotou && (
        <div
          className={styles.preencha}
          onClick={() => {
            setJaVotou(false);
          }}
        >
          <JaVotou />
        </div>
      )}
    </>
  );
};

export default Formulario;
