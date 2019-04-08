import React from "react";
import { connect } from "react-redux";
import { View, Text, AsyncStorage, ScrollView } from "react-native";

import { fetchTopTracks } from "../state/actions";

class TopTracksScreen extends React.Component {
  componentDidMount = async () => {
    const accessToken = await AsyncStorage.getItem("ACCESS_TOKEN");

    console.log(accessToken);
    this.props.fetchTopTracks(accessToken);
  };

  render() {
    return this.props.loading ? (
      <View>
        <Text>Loading...</Text>
      </View>
    ) : (
      <ScrollView>
        <Text>Welcome to Top Tracks!</Text>
        <View>
          <Text>{JSON.stringify(this.props.items, null, " ")}</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.top_tracks.loading,
  items: state.top_tracks.items,
  error: state.top_tracks.error
});

export default connect(
  mapStateToProps,
  { fetchTopTracks }
)(TopTracksScreen);
