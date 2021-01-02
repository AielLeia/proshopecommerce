import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Footer } from './components';
import { HomeScreen } from './screens';

const App = () => {
  return (
    <>
      <Header />
      <main className='my-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
