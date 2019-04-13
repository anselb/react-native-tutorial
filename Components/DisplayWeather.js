import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DisplayWeather = (props) => {
  // if there is no data, it must still be loading
  if (props.data === null) {
    return <Text>Loading...</Text>
  }

  // data.cod is where the status code is, so if an error occurred,
  // the value would not be 200 (could be 400, 404, etc.)
  if (props.data.cod !== 200) {
    return <Text>An Error has occurred</Text>
  }

  // if not loading and no error, load and display weather data
  // by grabbing the appropriate data from props
  const { name } = props.data
  const { temp, humidity, pressure } = props.data.main
  const { description } = props.data.weather[0]

  return (
    <View style={styles.container}>
      <Text style={styles.loc}>{name}</Text>
      <Text style={styles.temp}>{temp}˚F</Text>
      <Text style={styles.desc}>{description}</Text>
      <Text style={styles.other}>Humidity: {humidity}%</Text>
      <Text style={styles.other}>Pressure: {pressure} hPa</Text>
    </View>
  )
}

export default DisplayWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  loc: {
    fontSize: 40,
    fontWeight: '900',
    color: 'hsl(204, 100%, 50%)'
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  other: {
    fontSize: 25,
    fontWeight: '500'
  }
})
