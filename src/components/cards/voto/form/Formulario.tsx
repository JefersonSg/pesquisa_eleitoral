import React from 'react';
import styles from './form-infos.module.css';

const Formulario = () => {
  return (
    <form className={styles.formulario}>
      <div className={styles.distrito}>
        <label htmlFor="distrito">Aonde você mora?</label>
        <select name="distrito" id="distrito">
          <option value="Santo antônio de pádua">Santo antônio de pádua</option>
          <option value="Baltazar">Baltazar</option>
          <option value="Campelo">Campelo</option>
          <option value="Ibitiguaçu">Ibitiguaçu</option>
          <option value="Marangatu">Marangatu</option>
          <option value="Monte Alegre">Monte Alegre</option>
          <option value="Paraoquena">Paraoquena</option>
          <option value="Santa Cruz">Santa Cruz</option>
          <option value="São Pedro de Alcântara">São Pedro de Alcântara</option>
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
        <label htmlFor="genero">Qual o seu gênero</label>
        <select name="genero" id="genero">
          <option value="homem">Homem</option>
          <option value="mulher">Mulher</option>
          <option value="outro">Outro</option>
          <option value="outro">Prefiro não dizer</option>
        </select>
      </div>
      <button className={styles.botao_confirm}>Confirmar</button>
    </form>
  );
};

export default Formulario;
