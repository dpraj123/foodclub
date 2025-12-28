export enum RootRoutes {
  AuthStack = 'AuthStack',
  MainTabs = 'MainTabs',
}

export enum AuthRoutes {
  Login = 'Login',
  SignUp = 'SignUp',
}
export enum MainRoutes {
  Home = 'Home',
  Offers = 'Offers',
  Eatclub = 'Eatclub',
  Account = 'Account',
  RestrauntDetails = 'RestrauntDetails',
  Menu = 'Menu',
  ProfileEdit = 'ProfileEdit',
  cart = 'cart',
  Confirmation = 'Confirmation',
  EditInfo = 'EditInfo',
}

export type RootStackParamList = {
  [RootRoutes.AuthStack]: undefined;
  [RootRoutes.MainTabs]: undefined;
};

export type AuthStackParamList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.SignUp]: undefined;
};

export type MainTabParamList = {
  [MainRoutes.Home]: undefined;
  [MainRoutes.Offers]: undefined;
  [MainRoutes.Eatclub]: undefined;
  [MainRoutes.Account]: undefined;
};

export type MainStackParamList = {
  [MainRoutes.RestrauntDetails]: {restaurantId: string};
  [MainRoutes.Menu]: {categoryId: string};
  [MainRoutes.ProfileEdit]: undefined;
  [MainRoutes.cart]: undefined;
  [MainRoutes.Confirmation]: undefined;
  [MainRoutes.EditInfo]: undefined;
};
