import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DisplayWeather = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>72˚</Text>
      <Text style={styles.des}>Partly Cloudly</Text>
    </View>
  )
}

export default DisplayWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  des: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})
