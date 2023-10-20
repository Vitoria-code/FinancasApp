import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: '#FFF',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#3B3DBF',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#F0F4FF',
        drawerInactiveTintColor: '#121212',
      }}>
      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Registrar" component={New} />

      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
}
