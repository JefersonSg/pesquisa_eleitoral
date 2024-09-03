'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const GraficoRosquinha = ({
  idade1,
  idade2,
  idade3,
  idade4,
  idade5
}: {
  idade1: number;
  idade2: number;
  idade3: number;
  idade4: number;
  idade5: number;
}) => {
  const data = {
    datasets: [
      {
        label: `Número de votos`,
        data: [idade1, idade2, idade3, idade4, idade5],
        backgroundColor: [
          '#18d215',
          '#8CC70D',
          '#AE9300',
          '#DE7E25',
          '#FF5C00'
        ],
        hoverOffset: 8
      }
    ]
  };

  // Registrar o plugin globalmente (opcional)

  const options: any = {};

  return (
    <div style={{ width: '180px', margin: '0 auto', height: '180px' }}>
      <Doughnut data={data} options={options} width={180} height={180} />
    </div>
  );
};

export default GraficoRosquinha;
