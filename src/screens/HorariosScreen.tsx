import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const CORES = {
  azulInstitucional: '#005a9c',
  textoPrincipal: '#34495e',
  branco: '#ffffff',
  cinzaFundo: '#f4f4f4',
};

const HorariosScreen = ({ route }) => {
  const nome = route.params?.nome;
  const horarios = [
    { dia: 'Segunda', materia: 'Matemática', horario: '08h às 09h40' },
    { dia: 'Terça', materia: 'Física', horario: '10h às 11h40' },
    { dia: 'Quarta', materia: 'Programação', horario: '13h às 14h40' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={CORES.branco} />
      {nome ? (
        <View style={styles.content}>
          <Text style={styles.greetingText}>
            Olá, <Text style={styles.studentName}>{nome}</Text>! Aqui estão seus horários:
          </Text>
          <View>
            {horarios.map((item, index) => (
              <View key={index} style={styles.scheduleItem}>
                <Text style={styles.scheduleDay}>{item.dia}:</Text>
                <Text style={styles.scheduleDetails}>{item.materia} - {item.horario}</Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.genericText}>Horários de aula não personalizados.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: '600',
    color: CORES.textoPrincipal,
    textAlign: 'center',
    marginBottom: 30,
  },
  studentName: {
    color: CORES.azulInstitucional,
    fontWeight: 'bold',
  },
  scheduleItem: {
    backgroundColor: CORES.cinzaFundo,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleDay: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CORES.azulInstitucional,
    marginRight: 8,
  },
  scheduleDetails: {
    fontSize: 16,
    color: CORES.textoPrincipal,
  },
  genericText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CORES.textoPrincipal,
    textAlign: 'center',
  },
});

export default HorariosScreen;