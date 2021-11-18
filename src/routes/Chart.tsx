import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}
const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => ({
                x: price.time_close,
                y: [price.open, price.high, price.low, price.close],
              })),
            },
          ]}
          options={{
            chart: {
              height: 500,
            },
            xaxis: {
              type: 'datetime',

              categories: data?.map((price) => price.time_close),
            },
            yaxis: {
              show: false,
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
