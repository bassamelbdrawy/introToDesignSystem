import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../navigation/types';

const avatarImage = require('../assets/images/avatar.png');

function BadPractiseScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back"
          hitSlop={8}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <View style={styles.chevron} />
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.avatarWrap}>
          <Image source={avatarImage} style={styles.avatar} />
        </View>
        <Text style={styles.title}>How is the course going so far?</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick check-in 🌱</Text>
          <Text style={styles.cardBody}>
            Are you enjoying the course so far? Your answer helps us shape the
            next sessions.
          </Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.actions}>
          <Pressable accessibilityRole="button" style={styles.confirmButton}>
            <Text style={styles.confirmLabel}>Yes, confirm</Text>
          </Pressable>
          <Pressable accessibilityRole="button" style={styles.declineButton}>
            <Text style={styles.declineLabel}>Not really</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F4EF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
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
    borderColor: '#030508',
    transform: [{ rotate: '45deg' }],
  },
  content: {
    flex: 1,
    gap: 24,
    paddingHorizontal: 24,
  },
  avatarWrap: {
    width: 112,
    height: 112,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 999,
    backgroundColor: '#ECE7E0',
  },
  avatar: {
    width: 112,
    height: 112,
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#030508',
  },
  card: {
    gap: 4,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#1C1A19',
    backgroundColor: '#ECE7E0',
  },
  cardTitle: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: 17,
    lineHeight: 24,
    color: '#030508',
  },
  cardBody: {
    fontFamily: 'DMSans-Regular',
    fontSize: 15,
    lineHeight: 22,
    color: '#615951',
  },
  spacer: {
    flex: 1,
  },
  actions: {
    width: '100%',
    gap: 8,
  },
  confirmButton: {
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#1C1A19',
  },
  confirmLabel: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    color: '#F7F4EF',
  },
  declineButton: {
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#ECE7E0',
  },
  declineLabel: {
    fontFamily: 'DMSans-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    color: '#1C1A19',
  },
});

export default BadPractiseScreen;
