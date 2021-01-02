import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='my-3'>
        <Container>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
