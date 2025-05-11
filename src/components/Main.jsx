import React from 'react';
import Section from './Section';
import Article from './Article';
import Aside from './Aside';

const Main = () => {
  return (
    <main className="main">
      <Section />
      <Article />
      <Aside />
    </main>
  );
};

export default Main;