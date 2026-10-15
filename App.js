import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import NewExpenseModal from './src/screens/NewExpenseModal';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <HomeScreen />
      <NewExpenseModal />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fffefe',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
    gap: 10,
  },
});
