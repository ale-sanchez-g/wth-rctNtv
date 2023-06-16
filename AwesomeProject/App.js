import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";
import ButtonStyles from "./styles/button.style";

const url = "https://api.openweathermap.org/data/2.5/forecast";
const key = REPLACE_WITH_YOUR_API_KEY;

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "", // State to store the city name
      weather: "", // State to store the weather
      dateTime: "", // State to store the date and time
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
            alignItems: "center",
            backgroundColor: "#6495ED",
            marginTop: "15%",
          }}
        >
          <Text style={{ fontSize: 30 }}>Weather APP</Text>
          <Text style={{ fontSize: 20 }}>This is a simple Weather App</Text>
          <View>
            <View style={ButtonStyles.buttonContainer}>
              <Button
                onPress={this._onPressButton.bind(this)}
                title="SYD"
                testID="cityBtn"
              />
            </View>
          </View>
          {this.state.cityName && (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                testID="weatherDisplayTest"
                aria-label="weatherDisplayTest"
                title="weatherDisplayTest"
              >
                {`${this.state.cityName} is ${this.state.weather} at ${this.state.dateTime}`}
              </Text>
              <View style={{
                width: "100%",
                height: 100,
                alignItems: "center",
              }}>
                <Image
                  source={require(`./assets/cloudBckground.jpeg`)}
                  style={{
                    marginTop: 10,
                    width: "100%",
                    height: 80,
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </>
    );
  }
}
