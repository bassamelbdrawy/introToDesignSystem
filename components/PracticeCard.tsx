import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, font, spacing } from '../theme/tokens';

type PracticeCardProps = {
  type?: 'Good' | 'Bad';
  kicker: string;
  title: string;
  body: string;
  action: string;
  onPress: () => void;
};

function PracticeCard({
  type = 'Good',
  kicker,
  title,
  body,
  action,
  onPress,
}: PracticeCardProps) {
  const isGood = type === 'Good';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        isGood ? styles.goodCard : styles.badCard,
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.kicker, isGood ? styles.goodKicker : styles.badKicker]}>
        {kicker}
      </Text>
      <Text style={[styles.title, isGood ? styles.goodTitle : styles.badTitle]}>
        {title}
      </Text>
      <Text style={[styles.body, isGood ? styles.goodBody : styles.badBody]}>
        {body}
      </Text>
      <Text style={[styles.action, isGood ? styles.goodAction : styles.badAction]}>
        {action}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.sm,
    padding: spacing.lg,
    borderRadius: 20,
  },
  goodCard: {
    backgroundColor: colors.primary,
  },
  badCard: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    backgroundColor: colors.primarySubtle,
  },
  kicker: {
    fontFamily: font.semiBold,
    fontSize: 13,
    lineHeight: 18,
  },
  goodKicker: {
    color: '#C8C2BA',
  },
  badKicker: {
    color: colors.textMuted,
  },
  title: {
    fontFamily: font.bold,
    fontSize: 22,
    lineHeight: 28,
  },
  goodTitle: {
    color: colors.background,
  },
  badTitle: {
    color: colors.text,
  },
  body: {
    fontFamily: font.regular,
    fontSize: 15,
    lineHeight: 22,
  },
  goodBody: {
    color: '#D9D3CB',
  },
  badBody: {
    color: colors.textMuted,
  },
  action: {
    marginTop: spacing.sm,
    fontFamily: font.semiBold,
    fontSize: 15,
    lineHeight: 20,
  },
  goodAction: {
    color: colors.background,
  },
  badAction: {
    color: colors.primary,
  },
  pressed: {
    opacity: 0.88,
  },
});

export default PracticeCard;
