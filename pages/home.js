import React from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import Link from 'next/link';

import withAnalytics from '~/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/panda.jpg" width="200" alt="Imagem de um Panda" />
    <Title>NEXT JS REACT</Title>
    <Link href="/users">
      <a>Users</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
