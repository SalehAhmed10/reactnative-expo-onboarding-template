import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>404 - Page not found</ThemedText>
        <ThemedText style={styles.description}>
          The page you're looking for was not found.
        </ThemedText>
        <Link href={'/(routes)/onboarding'}
          style={styles.linkText}

        >Go to the home screen</Link>
      </ThemedView>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },



  linkText: {
    color: '#2e78b7',
    fontSize: 14,
    marginTop: 15,
    paddingVertical: 15,
  },



  description: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },



});
