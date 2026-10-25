import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import Disclaimer from '../components/Disclaimer';
import Header from '../components/Header';
import Title from '../components/Title';
import { ThemeProvider, useTheme } from '../theme/ThemeContext';
import { spacing } from '../theme/tokens';

function GoodPractiseScreen() {
  return (
    <ThemeProvider>
      <GoodPractiseContent />
    </ThemeProvider>
  );
}

function GoodPractiseContent() {
  const { mode, colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.background }]}
      edges={['top', 'bottom']}
    >
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Header type="Default" />
      <View style={styles.screen}>
        <Avatar type="Circle" />
        <Title type="H1">How is the course going so far?</Title>
        <Disclaimer type="Dotted" />
        <View style={styles.spacer} />
        <View style={styles.actions}>
          <Button type="Primary" label="Yes, confirm" />
          <Button type="Secondary" label="Not really" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  screen: {
    flex: 1,
    gap: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  spacer: {
    flex: 1,
  },
  actions: {
    width: '100%',
    gap: spacing.sm,
  },
});

export default GoodPractiseScreen;
