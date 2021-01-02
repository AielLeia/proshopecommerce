import { HomeScreen, ProductScreen } from '../screens';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomeScreen,
  },
  {
    path: '/product/:id',
    component: ProductScreen,
  },
];

const routesName = {
  homescreen: '/',
  productscreen: '/product/:id',
};

export { routes, routesName };
