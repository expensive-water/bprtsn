import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>prtsn.</Text>
      <Text style={styles.subheading}>Two Parties. One Country.</Text>
      <Text style={styles.copy}>
        Explore civic issues by topic, join respectful debates, launch campaigns, and track your real-world impact.
      </Text>
      <Link style={styles.link} href="/topics">Browse topics</Link>
      <Link style={styles.link} href="/debate">Civic Debate Mode</Link>
      <Link style={styles.link} href="/campaigns">Campaigns & Impact</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9ff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 32,
    gap: 12
  },
  heading: {
    fontSize: 32,
    color: '#1a35b8',
    fontWeight: '700'
  },
  subheading: {
    fontSize: 16,
    color: '#0f1d3a',
    fontWeight: '500'
  },
  copy: {
    fontSize: 16,
    color: '#394572'
  },
  link: {
    fontSize: 16,
    color: '#1a35b8',
    textDecorationLine: 'underline'
  }
});
