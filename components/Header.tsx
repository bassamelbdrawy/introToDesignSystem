import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { useTheme } from '../theme/ThemeContext';
import { spacing, typography } from '../theme/tokens';

type HeaderProps = {
  type?: 'Default';
};

function Header({ type = 'Default' }: HeaderProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { mode, colors, toggleTheme } = useTheme();
  const themeLabel = mode === 'light' ? 'Dark' : 'Light';
  const headerStyle = {
    Default: styles.nav,
  }[type];

  return (
    <View accessibilityRole="header" style={headerStyle}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Back"
        hitSlop={8}
        onPress={() => navigation.goBack()}
        style={styles.iconButton}>
        <View style={[styles.chevron, { borderColor: colors.text }]} />
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${themeLabel} theme`}
        accessibilityHint="Switches between light and dark theme"
        onPress={toggleTheme}
        style={styles.themeButton}>
        <Text style={[styles.themeLabel, { color: colors.text }]}>
          {themeLabel}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevron: {
    width: 12,
    height: 12,
    marginLeft: 4,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    transform: [{ rotate: '45deg' }],
  },
  themeButton: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
  },
  themeLabel: {
    ...typography.button,
  },
});

export default Header;
