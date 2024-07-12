import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Amigos from '../screens/Amigos';
import Jogos from '../screens/Jogos';
import Livros from '../screens/Livros';
import MakeLove from '../screens/MakeLove';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const AuthenticatedTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Amigos" component={Amigos} />
      <Tab.Screen name="Jogos" component={Jogos} />
      <Tab.Screen name="Livros" component={Livros} />
      <Tab.Screen name="MakeLove" component={MakeLove} />
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  );
};

export default AuthenticatedTabs;
