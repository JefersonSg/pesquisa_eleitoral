'use client';

import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const GraficoCidades = ({
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
        backgroundColor: [
          '#18D215',
          '#04CCB4',
          '#4CABF0',
          '#0B6FB8',
          '#958A2A',
          '#AF874C',
          '#309E69',
          '#B3530D',
          '#CA0000'
        ],
        hoverOffset: 8
      }
    ]
  };

  // Registrar o plugin globalmente (opcional)

  const options: any = {
    plugins: {
      datalabels: {
        color: 'white',
        align: 'end',
        anchor: 'end'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div style={{ width: '180px', margin: '0 auto', height: '180px' }}>
      <PolarArea data={data} options={options} width={180} height={180} />
    </div>
  );
};

export default GraficoCidades;
