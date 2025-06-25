import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// Cores para manter a consistência visual
const CORES = {
  azulInstitucional: '#005a9c',
  textoPrincipal: '#34495e',
  branco: '#ffffff',
  cinzaFundo: '#f4f4f4',
};

// Componente da Tela de Horários
// Recebe 'route' como propriedade para acessar os parâmetros
const HorariosScreen = ({ route }) => {
  // Acessa o parâmetro 'nome' de forma segura com "optional chaining" (?.)
  // Se route.params ou route.params.nome não existirem, 'nome' será undefined
  const nome = route.params?.nome;

  // Lista fictícia de horários
  const horarios = [
    { dia: 'Segunda', materia: 'Matemática', horario: '08h às 09h40' },
    { dia: 'Terça', materia: 'Física', horario: '10h às 11h40' },
    { dia: 'Quarta', materia: 'Programação', horario: '13h às 14h40' },
    { dia: 'Quinta', materia: 'História', horario: '08h às 09h40' },
    { dia: 'Sexta', materia: 'Química', horario: '10h às 11h40' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={CORES.branco} />

      {/* A renderização muda com base na existência do parâmetro 'nome' */}
      {nome ? (
        // Se 'nome' EXISTE, mostra a saudação personalizada e os horários
        <View style={styles.content}>
          <Text style={styles.greetingText}>
            Olá, <Text style={styles.studentName}>{nome}</Text>!
          </Text>
          <Text style={styles.subGreetingText}>Aqui estão seus horários:</Text>

          <View style={styles.scheduleContainer}>
            {horarios.map((item, index) => (
              <View key={index} style={styles.scheduleItem}>
                <Text style={styles.scheduleDay}>{item.dia}:</Text>
                <Text style={styles.scheduleDetails}>
                  {item.materia} - {item.horario}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        // Se 'nome' NÃO EXISTE, mostra a mensagem genérica
        <View style={styles.content}>
          <Text style={styles.genericText}>
            Horários de aula não personalizados.
          </Text>
          <Text style={styles.genericSubText}>
            Vá para a tela de Início para carregar seus dados.
          </Text>
        </View>
      )}
    </View>
  );
};

// Folha de estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
  },
  content: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '600',
    color: CORES.textoPrincipal,
    textAlign: 'center',
    marginBottom: 5,
  },
  studentName: {
    color: CORES.azulInstitucional,
    fontWeight: 'bold',
  },
  subGreetingText: {
    fontSize: 18,
    color: CORES.textoPrincipal,
    textAlign: 'center',
    marginBottom: 30,
  },
  scheduleContainer: {
    marginTop: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: CORES.textoPrincipal,
    textAlign: 'center',
  },
  genericSubText: {
    fontSize: 16,
    color: CORES.textoPrincipal,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default HorariosScreen;