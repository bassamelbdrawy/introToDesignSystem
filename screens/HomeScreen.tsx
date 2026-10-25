import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeIntro from '../components/HomeIntro';
import PracticeCard from '../components/PracticeCard';
import type { RootStackParamList } from '../navigation/types';
import { colors, spacing } from '../theme/tokens';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <HomeIntro
          eyebrow="SE104 · UI/UX"
          byline="Introduced by Bassam Elbadrawy"
          title="Same check-in. Two ways to build it."
          body="Open both versions of the student check-in and compare a screen made from the design system with one written by hand."
        />
        <View style={styles.cards}>
          <PracticeCard
            type="Good"
            kicker="01"
            title="Good practise"
            body="Components and tokens, with a header that switches light and dark."
            action="Open the system screen"
            onPress={() => navigation.navigate('GoodPractise')}
          />
          <PracticeCard
            type="Bad"
            kicker="02"
            title="Bad practise"
            body="One screen file, with colors and spacing written in place."
            action="Open the hardcoded screen"
            onPress={() => navigation.navigate('BadPractise')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
    gap: 32,
  },
  cards: {
    gap: spacing.md,
  },
});

export default HomeScreen;
