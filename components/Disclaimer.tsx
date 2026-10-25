import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { radius, spacing, typography } from '../theme/tokens';

type DisclaimerProps = {
  type?: 'Dotted' | 'None';
  title?: string;
  body?: string;
};

function Disclaimer({
  type = 'Dotted',
  title = 'Quick check-in 🌱',
  body = 'Are you enjoying the course so far? Your answer helps us shape the next sessions.',
}: DisclaimerProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.disclaimer,
        { backgroundColor: colors.primarySubtle },
        type === 'Dotted' && styles.dotted,
        type === 'Dotted' && { borderColor: colors.primary },
      ]}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.body, { color: colors.textMuted }]}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  disclaimer: {
    width: '100%',
    gap: spacing.xs,
    padding: spacing.md,
    borderRadius: radius.md,
  },
  dotted: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
  },
  title: {
    ...typography.disclaimerTitle,
  },
  body: {
    ...typography.disclaimerBody,
  },
});

export default Disclaimer;
