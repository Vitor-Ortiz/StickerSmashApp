import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>
          🔬➕ FísicoMath Stickers
        </Text>

        <Text style={styles.description}>
          Explore o lado divertido da ciência com o FísicoMath Stickers! Um app de figurinhas para quem ama{' '}
          <Text style={styles.highlight}>física</Text>, <Text style={styles.highlight}>matemática</Text> e também um bom meme científico. Use as figurinhas para expressar aquela dúvida existencial na aula, mandar um “isso é óbvio” com a cara de Newton ou até ilustrar um colapso mental em Cálculo com estilo. 🧠💥
        </Text>

        <Text style={styles.subheading}>📦 O que tem no pacote:</Text>

        <Text style={styles.listItem}>• Figurinhas engraçadas com equações, gráficos e memes nerds</Text>
        <Text style={styles.listItem}>• Ícones da ciência como Einstein, Tesla, Newton e Gauss</Text>
        <Text style={styles.listItem}>• Reações perfeitas para provas, aulas e trabalhos em grupo</Text>
        <Text style={styles.listItem}>• Atualizações com novos conteúdos físicos e matemáticos</Text>

        <Text style={styles.footer}>
          Ideal para estudantes, professores, vestibulandos e entusiastas que sabem que{' '}
          <Text style={styles.highlight}>“sem sticker, não há interação proporcional”</Text>. 📐😂
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5ccfe6',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 24,
    marginBottom: 24,
  },
  highlight: {
    color: '#5ccfe6',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 18,
    color: '#fca311',
    marginBottom: 12,
    fontWeight: '600',
  },
  listItem: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 24,
    marginBottom: 8,
  },
  footer: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 24,
    lineHeight: 24,
  },
})

