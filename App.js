import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigations from "./app/navigations/Navigations";





export default function App() {
  return (
    <Navigations />
  );
}









/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tracking - IOT Fernando Gutierrez</Text>
      <StatusBar style="auto" />
    </View>
  );
}

StyleSheet = Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
