import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const PriceItem = styled.ul``;
const PercentChange = styled.li`
  margin-bottom: 10px;
  padding: 20px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

interface IPriceProp {
  tickersData?: {
    ath_date: string;
    ath_price: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  };
  loading: boolean;
}

const Price = ({ tickersData, loading }: IPriceProp) => {
  return (
    <Container>
      {loading ? (
        'Loading....'
      ) : (
        <PriceItem>
          <PercentChange>ath_price: {tickersData?.ath_price}</PercentChange>
          <PercentChange>15m: {tickersData?.percent_change_15m}%</PercentChange>
          <PercentChange>30m: {tickersData?.percent_change_30m}%</PercentChange>
          <PercentChange>1h: {tickersData?.percent_change_1h}%</PercentChange>
          <PercentChange>6h: {tickersData?.percent_change_6h}%</PercentChange>
          <PercentChange>12h: {tickersData?.percent_change_12h}%</PercentChange>
          <PercentChange>24h: {tickersData?.percent_change_24h}%</PercentChange>
          <PercentChange>7d: {tickersData?.percent_change_7d}%</PercentChange>
          <PercentChange>30d: {tickersData?.percent_change_30d}%</PercentChange>
          <PercentChange>1y: {tickersData?.percent_change_1y}%</PercentChange>
        </PriceItem>
      )}
    </Container>
  );
};

export default Price;
