import React from "react";
import { View, Button, AsyncStorage, Linking, Text } from "react-native";

class SignInScreen extends React.Component {
  render() {
    return (
      <View>
        <Button title="Sign In" onPress={this._onSignIn} />
        <Text
          onPress={() =>
            Linking.openURL("https://stucksong.herokuapp.com/auth/spotify")
          }
        >
          Sign In with Spotify
        </Text>
      </View>
    );
  }

  _onSignIn = async () => {
    await AsyncStorage.setItem("userToken", "abc");

    this.props.navigation.navigate("Main");
  };
}

export default SignInScreen;
