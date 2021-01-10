import {
  CartScreen,
  HomeScreen,
  LoginScreen,
  PlaceOrderScreen,
  PaymentScreen,
  ProductScreen,
  ProfileScreen,
  RegisterScreen,
  ShippingScreen,
  OrderScreen,
  UserListScreen,
  UserEditScreen,
  ProductListScreen,
} from '../screens';

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
  {
    path: '/login',
    component: LoginScreen,
  },
  {
    path: '/register',
    component: RegisterScreen,
  },
  {
    path: '/profile',
    component: ProfileScreen,
  },
  {
    path: '/shipping',
    component: ShippingScreen,
  },
  {
    path: '/payment',
    component: PaymentScreen,
  },
  {
    path: '/placeorder',
    component: PlaceOrderScreen,
  },
  {
    path: '/order/:id',
    component: OrderScreen,
  },
  {
    path: '/admin/userslist',
    component: UserListScreen,
  },
  {
    path: '/admin/user/:id',
    component: UserEditScreen,
  },
  {
    path: '/admin/productlist',
    component: ProductListScreen,
  },
];

const routesName = {
  homescreen: '/',
  productscreen: '/product',
  cartscreen: '/cart',
  loginscreen: '/login',
  registerscreen: '/register',
  profilescreen: '/profile',
  shippingscreen: '/shipping',
  paymentscreen: '/payment',
  placeorderscreen: '/placeorder',
  orderscreen: '/order',
  userlistscreen: '/admin/userslist',
  usereditscreen: '/admin/user',
  productlistscreen: '/admin/productlist',
};

export { routes, routesName };
