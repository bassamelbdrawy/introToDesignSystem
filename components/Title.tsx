import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { typography } from '../theme/tokens';

type TitleProps = {
  type?: 'H1';
  children?: string;
};

function Title({
  type = 'H1',
  children = 'How is the course going so far?',
}: TitleProps) {
  const { colors } = useTheme();

  return (
    <Text style={[type === 'H1' && styles.h1, { color: colors.text }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    ...typography.h1,
  },
});

export default Title;
