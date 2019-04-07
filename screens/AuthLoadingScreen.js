import React from "react";
import { connect } from "react-redux";
import {
  ActivityIndicator,
  View,
  Text,
  AsyncStorage,
  StatusBar
} from "react-native";

import refreshTokens from "../auth/getTokens";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      error: false
    };

    this._bootstrapAsync();
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Text>{JSON.stringify(this.state.user)}</Text>
      </View>
    );
  }

  _bootstrapAsync = async () => {
    const tokenExpirationTime = await AsyncStorage.getItem("EXPIRATION_TIME");

    if (new Date().getTime() > tokenExpirationTime) {
      await refreshTokens();
    }

    this.props.navigation.navigate("Main");
  };
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AuthLoadingScreen);
