import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { radius, size } from '../theme/tokens';

const avatarImage = require('../assets/images/avatar.png');

type AvatarProps = {
  type?: 'Circle' | 'Square';
};

function Avatar({ type = 'Circle' }: AvatarProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.row}>
      <View
        accessibilityRole="image"
        accessibilityLabel="Student avatar"
        style={[
          styles.avatar,
          { backgroundColor: colors.primarySubtle },
          type === 'Square' ? styles.square : styles.circle,
        ]}>
        <Image source={avatarImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: size.avatar,
    height: size.avatar,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circle: {
    borderRadius: radius.full,
  },
  square: {
    borderRadius: radius.md,
  },
  image: {
    width: size.avatar,
    height: size.avatar,
  },
});

export default Avatar;
