import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';

interface IRouterProp {}

const Router = ({}: IRouterProp) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Coins />} />
      </Routes>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
