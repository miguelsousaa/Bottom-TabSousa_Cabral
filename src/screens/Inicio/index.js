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

// Cores baseadas na paleta institucional do CEFET-MG
const CORES = {
  azulInstitucional: '#005a9c',
  laranjaComplementar: '#f39c12',
  cinzaClaro: '#ecf0f1',
  textoPrincipal: '#34495e',
  branco: '#ffffff',
};

// Componente da Tela de Início
// Recebe 'navigation' como propriedade para podermos navegar entre as telas
const InicioScreen = ({ navigation }) => {
  // Nome do estudante que será enviado para a tela de Horários
  const nomeEstudante = 'Ana';

  // Função para abrir o site oficial do CEFET-MG
  const abrirSiteNoticias = () => {
    Linking.openURL('https://www.cefetmg.br/noticias/').catch((err) =>
      console.error('Não foi possível abrir a URL:', err)
    );
  };

  // Função para navegar para a tela de Horários
  const irParaHorarios = () => {
    // Usamos navigation.navigate para ir para a rota 'Horários'
    // e passamos um objeto com o parâmetro 'nome'
    navigation.navigate('Horários', { nome: nomeEstudante });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={CORES.azulInstitucional} />
      
      {/* Cabeçalho com o título da tela */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu CEFET-MG</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Mensagem de boas-vindas personalizada */}
        <Text style={styles.welcomeText}>Boas-vindas, {nomeEstudante}!</Text>

        {/* Seção de Notícias */}
        <View style={styles.noticiasSection}>
          <Text style={styles.sectionTitle}>Últimas Notícias</Text>
          
          {/* Notícia 1 (clicável) */}
          <TouchableOpacity style={styles.cardNoticia} onPress={abrirSiteNoticias}>
            <Text style={styles.cardTitle}>Inscrições abertas para cursos técnicos</Text>
            <Text style={styles.cardDescription}>Não perca o prazo! As inscrições vão até o final do mês. Saiba mais sobre os cursos e o processo seletivo.</Text>
          </TouchableOpacity>

          {/* Notícia 2 (clicável) */}
          <TouchableOpacity style={styles.cardNoticia} onPress={abrirSiteNoticias}>
            <Text style={styles.cardTitle}>Semana C&T 2025: Programação Divulgada</Text>
            <Text style={styles.cardDescription}>Confira a programação completa da Semana de Ciência e Tecnologia deste ano. Palestras, minicursos e muito mais.</Text>
          </TouchableOpacity>
        </View>

        {/* Botão para ver os horários */}
        <TouchableOpacity style={styles.button} onPress={irParaHorarios}>
          <Text style={styles.buttonText}>Ver meus horários</Text>
        </TouchableOpacity>
      </ScrollView>
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