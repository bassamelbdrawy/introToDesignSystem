import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { radius, size, spacing, typography } from '../theme/tokens';

type ButtonProps = {
  type?: 'Primary' | 'Secondary' | 'Tertiary';
  label: string;
  onPress?: () => void;
};

function Button({ type = 'Primary', label, onPress }: ButtonProps) {
  const { colors } = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        type === 'Primary' && { backgroundColor: colors.primary },
        type === 'Secondary' && { backgroundColor: colors.primarySubtle },
        type === 'Tertiary' && styles.tertiary,
        pressed && styles.pressed,
      ]}>
      <Text
        style={[
          styles.label,
          type === 'Primary' && { color: colors.background },
          type === 'Secondary' && { color: colors.primary },
          type === 'Tertiary' && styles.tertiaryLabel,
          type === 'Tertiary' && { color: colors.primary },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: size.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
  },
  tertiary: {
    backgroundColor: 'transparent',
  },
  tertiaryLabel: {
    textDecorationLine: 'underline',
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    ...typography.button,
  },
});

export default Button;
