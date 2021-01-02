import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Footer } from './components';

const App = () => {
  return (
    <>
      <Header />
      <main className='my-3'>
        <Container>
          <h1>Welcom To ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
