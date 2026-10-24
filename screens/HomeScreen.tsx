import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.home}>
        <Text style={styles.title}>SE104</Text>
        <View style={styles.boxes}>
          <Pressable
            accessibilityRole="button"
            style={styles.box}
            onPress={() => navigation.navigate('GoodPractise')}>
            <Text style={styles.boxTitle}>Good practise</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            style={styles.box}
            onPress={() => navigation.navigate('BadPractise')}>
            <Text style={styles.boxTitle}>Bad practise</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F7F4EF',
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 32,
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: '#1C1917',
  },
  boxes: {
    width: '100%',
    gap: 16,
  },
  box: {
    minHeight: 88,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D6D3D1',
    backgroundColor: '#FFFFFF',
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1917',
  },
});

export default HomeScreen;
