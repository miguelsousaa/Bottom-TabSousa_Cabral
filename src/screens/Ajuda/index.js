import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';

// Cores institucionais para manter a identidade visual
const CORES = {
  azulInstitucional: '#005a9c',
  laranjaComplementar: '#f39c12',
  textoPrincipal: '#34495e',
  branco: '#ffffff',
  cinzaFundo: '#f4f4f4',
};

// Componente da Tela de Ajuda
const AjudaScreen = () => {
  // Lista com as perguntas frequentes, conforme solicitado no documento
  const perguntasFrequentes = [
    'Como acessar o SIGAA?',
    'Como solicitar declaração de matrícula?',
    'Onde consultar minhas notas?',
  ];

  // Função que será chamada ao pressionar o botão "Fale conosco"
  const mostrarAlertaContato = () => {
    Alert.alert(
      'Fale Conosco', // Título do Alerta
      'Entre em contato pelo e-mail suporte@cefetmg.br', // Mensagem do Alerta 
      [{ text: 'OK' }] // Botão para fechar o alerta
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={CORES.branco} />

      {/* Cabeçalho da tela */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Central de Ajuda</Text>
      </View>

      <View style={styles.content}>
        {/* Seção de Perguntas Frequentes */}
        <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>

        <View style={styles.faqContainer}>
          {/* Mapeia a lista de perguntas para renderizar cada uma */}
          {perguntasFrequentes.map((pergunta, index) => (
            <View key={index} style={styles.faqItem}>
              <Text style={styles.faqText}>{pergunta}</Text>
            </View>
          ))}
        </View>

        {/* Botão para entrar em contato */}
        <TouchableOpacity style={styles.button} onPress={mostrarAlertaContato}>
          <Text style={styles.buttonText}>Fale conosco</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Folha de estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
  },
  header: {
    backgroundColor: CORES.branco,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: CORES.cinzaFundo,
  },
  headerText: {
    color: CORES.azulInstitucional,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CORES.textoPrincipal,
    marginBottom: 20,
  },
  faqContainer: {
    marginBottom: 30,
  },
  faqItem: {
    backgroundColor: CORES.cinzaFundo,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  faqText: {
    fontSize: 16,
    color: CORES.textoPrincipal,
  },
  button: {
    backgroundColor: CORES.laranjaComplementar,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto', // Empurra o botão para a parte de baixo
  },
  buttonText: {
    color: CORES.branco,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AjudaScreen;