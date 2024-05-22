'use client';

import React from 'react';
import styles from './form-infos.module.css';
import ConfirmLottie from '@/components/lottie/Confirm';
import AwaitLottie from '@/components/lottie/Await';

const Formulario = ({
  setAtivo
}: {
  setAtivo: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setSaved(true);
        setIsLoading(false);
        scroll({ top: 0 });
      }, 3000);
    }
  }, [isLoading, saved]);

  return (
    <>
      <form className={styles.formulario}>
        <div className={styles.distrito}>
          <label htmlFor="distrito">Aonde você mora? Cidade / Distrito</label>
          <select name="distrito" id="distrito">
            <option value="" selected style={{ display: 'none' }}></option>
            <option value="Santo Antônio de Pádua">
              Santo Antônio de Pádua
            </option>
            <option value="Baltazar">Baltazar</option>
            <option value="Campelo">Campelo</option>
            <option value="Ibitiguaçu">Ibitiguaçu</option>
            <option value="Marangatu">Marangatu</option>
            <option value="Monte Alegre">Monte Alegre</option>
            <option value="Paraoquena">Paraoquena</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="São Pedro de Alcântara">
              São Pedro de Alcântara
            </option>
          </select>
        </div>
        <div className={styles.idade}>
          <label htmlFor="idade">Qual a sua idade?</label>
          <div>
            <input type="radio" name="idade" id="16 a 24 anos" />
            <label htmlFor="16 a 24 anos">16 a 24 anos</label>
          </div>
          <div>
            <input type="radio" name="idade" id="25 a 34 anos" />
            <label htmlFor="25 a 34 anos">25 a 34 anos</label>
          </div>
          <div>
            <input type="radio" name="idade" id="35 a 44 anos" />
            <label htmlFor="35 a 44 anos">35 a 44 anos</label>
          </div>
          <div>
            <input type="radio" name="idade" id="45 a 59 anos" />
            <label htmlFor="45 a 59 anos">45 a 59 anos</label>
          </div>
          <div>
            <input type="radio" name="idade" id="60 ou mais" />
            <label htmlFor="60 ou mais">60 ou mais</label>
          </div>
        </div>
        <div className={styles.genero}>
          <option value="" selected style={{ display: 'none' }}></option>
          <label htmlFor="genero">Qual o seu gênero</label>
          <select name="genero" id="genero">
            <option value="homem">Homem</option>
            <option value="mulher">Mulher</option>
            <option value="outro">Outro</option>
            <option value="outro">Prefiro não dizer</option>
          </select>
        </div>
        <div className={styles.distrito}>
          <label htmlFor="distrito">
            Em quem você não votaria de jeito nenhum?
          </label>
          <select name="distrito" id="distrito">
            <option value="" selected style={{ display: 'none' }}>
              Selecione um candidato
            </option>

            <option value="Paulinho da refrigeração">
              Paulinho da refrigeração
            </option>
            <option value="Josias quintal">Josias quintal</option>
            <option value="Béto da farmacia">Béto da farmacia</option>
            <option value="Leonardo da agricultura">
              Leonardo da agricultura
            </option>
            <option value="Rogério Machado">Rogério Machado</option>
            <option value="">Nenhuma das opções</option>
          </select>
        </div>
        <button
          className={styles.botao_confirm}
          onClick={(e) => {
            e.preventDefault();

            setIsLoading(true);
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
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Formulario;
