/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import React from 'react';
import Lottie from 'react-lottie';
import styles from './await.module.css';

// Arquivos Lottie
import Await from '@/../public/lottie/await.json';

const AwaitLottie = () => {
  const animation = Await;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation
  };

  return (
    <div
      className={styles.animation}
      onClick={async (e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Lottie options={defaultOptions} width={300} height={300} />
    </div>
  );
};

export default AwaitLottie;
