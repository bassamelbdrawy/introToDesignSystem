import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, font, radius, spacing } from '../theme/tokens';

const avatarImage = require('../assets/images/avatar.png');

type HomeIntroProps = {
  eyebrow: string;
  byline: string;
  title: string;
  body: string;
};

function HomeIntro({ eyebrow, byline, title, body }: HomeIntroProps) {
  return (
    <View style={styles.intro}>
      <View style={styles.avatarWrap}>
        <Image
          accessibilityLabel="Student avatar"
          source={avatarImage}
          style={styles.avatar}
        />
      </View>
      <View style={styles.heading}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.byline}>{byline}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  intro: {
    gap: spacing.md,
  },
  avatarWrap: {
    width: 72,
    height: 72,
    overflow: 'hidden',
    borderRadius: radius.full,
    backgroundColor: colors.primarySubtle,
  },
  avatar: {
    width: 72,
    height: 72,
  },
  heading: {
    gap: spacing.xs,
  },
  eyebrow: {
    fontFamily: font.semiBold,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  byline: {
    fontFamily: font.regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
  title: {
    fontFamily: font.bold,
    fontSize: 34,
    lineHeight: 40,
    color: colors.text,
  },
  body: {
    fontFamily: font.regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.textMuted,
  },
});

export default HomeIntro;
