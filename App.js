import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookScreen from './screens/BookScreen';
import * as Font from 'expo-font'
export default function App() {

  const [loading, setLoading] = useState(true)



  const loadFont = async () => {
    try {
      await Font.loadAsync({
        'Gilroy-Bold': require('./assets/fonts/Gilroy-Bold.ttf'),
        'GT-Sectra-Fine-Regular': require('./assets/fonts/GT-Sectra-Fine-Regular.ttf'),
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf')
      })

      setLoading(false)
    } catch (error) {
      console.log('error', e)
    }
  }

  useEffect(() => {
    loadFont()
  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading....</Text>
      </View>
    )
  }

  return (
    <BookScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
