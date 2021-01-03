import { CartScreen, HomeScreen, ProductScreen } from '../screens';

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
  {
    path: '/cart/:id?',
    component: CartScreen,
  },
];

const routesName = {
  homescreen: '/',
  productscreen: '/product/:id',
  cartscreen: '/cart/:id?',
};

export { routes, routesName };
