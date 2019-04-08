import React from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TopTracksScreen from "../screens/TopTracksScreen";
import TopArtistsScreen from "../screens/TopArtistsScreen";
import CreatePlaylistScreen from "../screens/CreatePlaylistScreen";
import UserProfileScreen from "../screens/UserProfileScreen";

const TopTracksStack = createStackNavigator({
  TopTracks: TopTracksScreen
});

TopTracksStack.navigationOptions = {
  tabBarLabel: "Top Tracks",
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <Image
      source={
        focused
          ? require("../assets/icons/music_note_focused.png")
          : require("../assets/icons/music_note.png")
      }
      style={{ width: 26, height: 26, resizeMode: "contain" }}
    />
  )
};

const TopArtistsStack = createStackNavigator({
  TopArtists: TopArtistsScreen
});

TopArtistsStack.navigationOptions = {
  tabBarLabel: "Top Artists",
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <Image
      source={
        focused
          ? require("../assets/icons/bowie_focused.png")
          : require("../assets/icons/bowie.png")
      }
      style={{ width: 26, height: 26, resizeMode: "contain" }}
    />
  )
};

const CreatePlaylistStack = createStackNavigator({
  CreatePlaylist: CreatePlaylistScreen
});

CreatePlaylistStack.navigationOptions = {
  tabBarLabel: "Create Playlist",
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <Image
      source={
        focused
          ? require("../assets/icons/playlist_focused.png")
          : require("../assets/icons/playlist.png")
      }
      style={{ width: 26, height: 26, resizeMode: "contain" }}
    />
  )
};

const UserProfileStack = createStackNavigator({
  UserProfile: UserProfileScreen
});

UserProfileStack.navigationOptions = {
  tabBarLabel: "UserProfile",
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <Image
      source={
        focused
          ? require("../assets/icons/settings_focused.png")
          : require("../assets/icons/settings.png")
      }
      style={{ width: 26, height: 26, resizeMode: "contain" }}
    />
  )
};

export default createBottomTabNavigator({
  TopTracksStack,
  TopArtistsStack,
  CreatePlaylistStack,
  UserProfileStack
});
