import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed'; //feed
import Amigos from '../screens/Amigos'; //amigos
import Jogos from '../screens/Jogos'; //jogos
import Livros from '../screens/Livros'; //livros
import MakeLove from '../screens/MakeLove'; //make love
import CrudScreen from '../screens/CrudScreen'; //crud genérico

const Tab = createBottomTabNavigator();

const AuthenticatedTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Amigos" component={Amigos} />
      <Tab.Screen name="Jogos" component={Jogos} />
      <Tab.Screen name="Livros" component={Livros} />
      <Tab.Screen name="MakeLove" component={MakeLove} />
      <Tab.Screen name="CrudScreen" component={CrudScreen} />
    </Tab.Navigator>
  );
};

export default AuthenticatedTabs;
