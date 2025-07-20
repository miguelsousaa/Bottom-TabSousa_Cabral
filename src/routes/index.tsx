import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import InicioScreen from '../screens/Inicio';
import HorariosScreen from '../screens/Horarios';
import AjudaScreen from '../screens/Ajuda';


const Tab = createBottomTabNavigator();


const CORES = {
  azulInstitucional: '#005a9c',
  cinzaClaro: '#d3d3d3',
  branco: '#ffffff',
};

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline'; 
          } else if (route.name === 'Horários') {
            iconName = focused ? 'calendar' : 'calendar-outline'; 
          } else if (route.name === 'Ajuda') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';  
          }

          return <Ionicons name={iconName} size={28} color={color} />; 
        },
        tabBarStyle: {
          backgroundColor: CORES.azulInstitucional, 
        },
        tabBarActiveTintColor: CORES.branco, 
        tabBarInactiveTintColor: CORES.cinzaClaro, 
        tabBarShowLabel: false,
        headerShown: false, 
      })}
    >
      <Tab.Screen name="Início" component={InicioScreen} />
      <Tab.Screen name="Horários" component={HorariosScreen} />
      <Tab.Screen name="Ajuda" component={AjudaScreen} />
    </Tab.Navigator>
  );
}
