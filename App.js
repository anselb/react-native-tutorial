import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WEATHER_KEY } from 'react-native-dotenv'

import DisplayWeather from './Components/DisplayWeather'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: null,
      weather: null
    }
  }

  loadWeather() {
    console.log(WEATHER_KEY)
    const apikey = WEATHER_KEY
    const { latitude, longitude } = this.state.location.coords
    const units = 'Imperial'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`

    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({ weather: json }))
      .catch(err => console.log(err.message))
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location)
      this.setState({ location })
      this.loadWeather()
    }, (err) => {
      console.log(err.message)
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <DisplayWeather />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
