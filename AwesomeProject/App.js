import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";
import ButtonStyles from "./styles/button.style";

const url = "https://api.openweathermap.org/data/2.5/forecast";
const key = REPLACE_API_KEY_HERE;

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "", // State to store the city name
    };
  }

  _onPressButton() {
    /* The code above does the following:
    1. fetches the weather data from the API
    2. converts the response into a JSON object
    3. updates the state of an Object with the city name */
    fetch(url + "?lat=-33.86&lon=151.21&appid=" + key + "&cnt=1")
      .then((response) => response.json())
      .then((responseJson) => {
        // Update the state with the city name
        this.setState({
          cityName: responseJson.city.name,
          weather: responseJson.list[0].weather[0].main,
          dateTime: responseJson.list[0].dt_txt,
        });
      });
  }

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#4267B2",
            marginTop: "15%",
          }}
        >
          <Text style={{ fontSize: 30 }}>Weather APP</Text>
          <Text style={{ fontSize: 20 }}>This is a simple Weather App</Text>
          <View style={ButtonStyles.container}>
            <View style={ButtonStyles.buttonContainer}>
              <Button
                onPress={this._onPressButton.bind(this)}
                title="SYD"
                testID="cityBtn"
              />
            </View>
          </View>
          {this.state.cityName && (
            <>
              <Text testID="weatherDisplayTest">
                {`${this.state.cityName} will have ${this.state.weather} at ${this.state.dateTime}`}
              </Text>
              <Image
                source={require(`./assets/cloud.jpeg`)}
                style={{ width: 40, height: 40 }}
              />
            </>
          )}
        </View>
      </>
    );
  }
}
