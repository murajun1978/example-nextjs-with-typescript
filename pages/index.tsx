import React from 'react';
import { Title, BlueTitle } from '../components/Title';

const Home = () => (
  <>
    <Title>{process.env.WELCOME_MESSAGE}</Title>
    <BlueTitle>{process.env.WELCOME_MESSAGE}</BlueTitle>
  </>
);

export default Home;
