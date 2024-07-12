import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import AuthTabs from './auth.tabs.routes';
import AuthenticatedTabs from './authenticated.tabs.routes';
import { getToken } from '../services/auth'; 
import LoadingScreen from '../screens/LoadingScreen'; 

const Stack = createStackNavigator();

const StackRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const token = await getToken();
      setUserToken(token);
      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator initialRouteName={userToken ? "AuthenticatedTabs" : "Home"}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="AuthTabs" component={AuthTabs} options={{ headerShown: false }} />
      <Stack.Screen name="AuthenticatedTabs" component={AuthenticatedTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
