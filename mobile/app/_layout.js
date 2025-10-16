import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#1a35b8' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: '600' }
    }} />
  );
}
