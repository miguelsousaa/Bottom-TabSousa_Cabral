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

// Componente que configura e renderiza a navegação
export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Função para definir o ícone de cada aba
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline'; // Ícone da aba Início 
          } else if (route.name === 'Horários') {
            iconName = focused ? 'calendar' : 'calendar-outline'; // Ícone da aba Horários 
          } else if (route.name === 'Ajuda') {
            iconName = focused ? 'help-circle' : 'help-circle-outline'; // Ícone da aba Ajuda 
          }

          // Retorna o componente de ícone
          return <Ionicons name={iconName} size={28} color={color} />; // Tamanho do ícone: 28px 
        },
        // Estilos da barra de abas
        tabBarStyle: {
          backgroundColor: CORES.azulInstitucional, // Cor de fundo azul institucional 
        },
        tabBarActiveTintColor: CORES.branco, // Cor do ícone ativo: branco 
        tabBarInactiveTintColor: CORES.cinzaClaro, // Cor do ícone inativo: cinza claro 
        tabBarShowLabel: false, // Esconde o texto do ícone 
        headerShown: false, // Vamos esconder o cabeçalho por enquanto
      })}
    >
      {/* Definindo cada aba do aplicativo */}
      <Tab.Screen name="Início" component={InicioScreen} />
      <Tab.Screen name="Horários" component={HorariosScreen} />
      <Tab.Screen name="Ajuda" component={AjudaScreen} />
    </Tab.Navigator>
  );
}