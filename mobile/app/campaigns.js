import { StyleSheet, View, Text } from 'react-native';

export default function CampaignsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your First Campaign</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Mind Matters</Text>
        <Text style={styles.copy}>Goals: Host peer-support circles, lobby for counselors.</Text>
        <Text style={styles.copy}>Impact Score: 420 pts</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Impact Tracker</Text>
        <Text style={styles.copy}>Petitions: 4 · Events: 2 · Representatives: 3</Text>
        <Text style={styles.copy}>Daily streak: 12 days</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Politics IRL</Text>
        <Text style={styles.copy}>Local voter registration drive · City Hall · Sat 2pm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9ff', padding: 24, gap: 16 },
  heading: { fontSize: 24, fontWeight: '600', color: '#1a35b8' },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 16, gap: 8 },
  title: { fontSize: 18, fontWeight: '600', color: '#0f1d3a' },
  copy: { color: '#394572' }
});
