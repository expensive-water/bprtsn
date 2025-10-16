import { StyleSheet, View, Text, FlatList } from 'react-native';

const topics = ['Climate', 'Education', 'Economy', 'Health', 'Free Speech'];

export default function TopicsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Topic-based feed</Text>
      <FlatList
        data={topics}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.topic}>{item}</Text>
            <Text style={styles.copy}>Tap to explore fact-checks, debates, and campaigns.</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9ff', padding: 24, gap: 16 },
  heading: { fontSize: 24, fontWeight: '600', color: '#1a35b8' },
  card: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
    shadowColor: '#1a35b8',
    shadowOpacity: 0.08,
    shadowRadius: 8
  },
  topic: { fontSize: 18, fontWeight: '600', color: '#0f1d3a' },
  copy: { marginTop: 6, color: '#394572' }
});
