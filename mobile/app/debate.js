import { StyleSheet, View, Text } from 'react-native';

const rounds = ['Opening', 'Rebuttal', 'Closing'];

export default function DebateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Civic Debate Mode</Text>
      <Text style={styles.copy}>Structured three-round debates reward clarity, empathy, and facts.</Text>
      {rounds.map((round) => (
        <View key={round} style={styles.round}>
          <Text style={styles.roundLabel}>{round}</Text>
          <Text style={styles.roundCopy}>
            {round === 'Opening' && 'Share your lived experience and thesis respectfully.'}
            {round === 'Rebuttal' && 'Respond with empathy, cite evidence, and address community impact.'}
            {round === 'Closing' && 'Highlight common ground, open questions, and next steps.'}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9ff', padding: 24, gap: 16 },
  heading: { fontSize: 24, fontWeight: '600', color: '#1a35b8' },
  copy: { color: '#394572' },
  round: { backgroundColor: '#fff', padding: 16, borderRadius: 16, gap: 8 },
  roundLabel: { fontSize: 18, fontWeight: '600', color: '#0f1d3a' },
  roundCopy: { color: '#394572' }
});
