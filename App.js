import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from './Pages/homePage/Home';
import Details from './Pages/detailsPage/Details';
import Favorites from './Pages/favoritesPage/favorites';
import { Provider } from 'react-redux';
import store from './Redux/store';
import FavoritesPage from './Pages/favoritesPage/favorites';
export default function App() {

  function StackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}   />
        <Stack.Screen name="details" component={Details} options={{ title: 'Details' ,
          drawerLabel: 'Details',
        }} />
    
      </Stack.Navigator>
    );
  }

  const Stack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  return (

    <Provider store={store} > 
    <NavigationContainer >
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={StackScreen} options={({ route }) => {
      const focused = getFocusedRouteNameFromRoute(route) ?? 'Home';
      const titleMap = { Home: 'Home', details: 'Details', Favorites: 'Favorites' };
      return {
        drawerLabel: 'Home',
        headerTitle: titleMap[focused] ?? 'Home',
      };
    }}   />
        <Drawer.Screen name="Favorites" component={FavoritesPage} options={{ 
            drawerLabel: 'Favorites',
            headerShadowVisible: false
          }}   />
      

      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

