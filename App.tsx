import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes'; // Importando nossas rotas

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
