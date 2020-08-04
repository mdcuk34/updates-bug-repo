import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as Updates from 'expo-updates';

const fetchUpdate = async () => {
    try {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
    } catch(e){
        alert(e)
    }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Updates Test</Text>
      <Text>Version: {Updates.manifest.version}</Text>
      <Button onPress={fetchUpdate} title="Fetch Update" />
      <Image
          style={styles.image}
          source={require('./assets/image.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50
  }
});
