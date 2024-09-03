'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const GraficoRosquinhaGenero = ({
  estatistica1,
  estatistica2,
  estatistica3
}: {
  estatistica1: number;
  estatistica2: number;
  estatistica3: number;
}) => {
  const data = {
    datasets: [
      {
        label: 'Número de votos',
        data: [estatistica1, estatistica2, estatistica3],
        backgroundColor: ['#538ADD', '#F412D0', '#844BCE'],
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

export default GraficoRosquinhaGenero;
