import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "", // State to store the city name
    };
  }

  _onPressButton() {
    // Call API to get weather data
    fetch(apiBaseUrl + "?lat=-33.86&lon=151.21&appid=" + apiKey + "&cnt=1")
      .then((response) => response.json())
      .then((responseJson) => {
        // Update the state with the city name
        this.setState({ cityName: responseJson.city.name });
      });
  }

  render() {
    return (
      <>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 30 }}>Weather APP</Text>
          <Text style={{ fontSize: 20 }}>This is a simple Weather App</Text>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button onPress={this._onPressButton.bind(this)} title="SYD" />
            </View>
            <Text>{this.state.cityName}</Text>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="MELB"
                color="#841584"
              />
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
