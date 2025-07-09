import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  StatusBar,
} from 'react-native';

const CORES = {
  azulInstitucional: '#005a9c',
  laranjaComplementar: '#f39c12',
  cinzaClaro: '#ecf0f1',
  textoPrincipal: '#34495e',
  branco: '#ffffff',
};

const InicioScreen = ({ navigation }) => {
  const nomeEstudante = 'Ana';

  const abrirSiteNoticias = () => {
    Linking.openURL('https://www.cefetmg.br/noticias/').catch((err) =>
      console.error('Não foi possível abrir a URL:', err)
    );
  };

  const irParaHorarios = () => {
    navigation.navigate('Horários', { nome: nomeEstudante });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={CORES.azulInstitucional} />
    
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu CEFET-MG</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.welcomeText}>Boas-vindas, {nomeEstudante}!</Text>

        <View style={styles.noticiasSection}>
          <Text style={styles.sectionTitle}>Últimas Notícias</Text>
  
          <TouchableOpacity style={styles.cardNoticia} onPress={abrirSiteNoticias}>
            <Text style={styles.cardTitle}>Inscrições abertas para cursos técnicos</Text>
            <Text style={styles.cardDescription}>Não perca o prazo! As inscrições vão até o final do mês. Saiba mais sobre os cursos e o processo seletivo.</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.cardNoticia} onPress={abrirSiteNoticias}>
            <Text style={styles.cardTitle}>Semana C&T 2025: Programação Divulgada</Text>
            <Text style={styles.cardDescription}>Confira a programação completa da Semana de Ciência e Tecnologia deste ano. Palestras, minicursos e muito mais.</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={irParaHorarios}>
          <Text style={styles.buttonText}>Ver meus horários</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
  },
  header: {
    backgroundColor: CORES.azulInstitucional,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    color: CORES.branco,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollContainer: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
    color: CORES.textoPrincipal,
    marginBottom: 25,
    textAlign: 'center',
  },
  noticiasSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CORES.azulInstitucional,
    marginBottom: 15,
  },
  cardNoticia: {
    backgroundColor: CORES.cinzaClaro,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CORES.textoPrincipal,
  },
  cardDescription: {
    fontSize: 14,
    color: CORES.textoPrincipal,
    marginTop: 5,
  },
  button: {
    backgroundColor: CORES.laranjaComplementar,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: CORES.branco,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InicioScreen;
