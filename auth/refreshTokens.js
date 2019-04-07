import { AsyncStorage } from "react-native";
import {encode} from 'react-native-dotenv';

import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "react-native-dotenv";

import getTokens from './getTokens';

export default async () => {
  try {

    const credsB64 = encode(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

    const refreshToken = await AsyncStorage.getItem('REFRESH_TOKEN');

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    });

    const responseJson = await response.json();

    if (responseJson.error) {
      await getTokens();
    } else {
      const {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
        expires_in: expiresIn,
      } = responseJson;

      const expirationTime = new Date().getTime() + expiresIn * 1000;

      await AsyncStorage.setItem('ACCESS_TOKEN', newAccessToken);

      if (newRefreshToken) {
        await AsyncStorage.setItem('REFRESH_TOKEN', newRefreshToken);
      }
      await AsyncStorage.setItem('EXPIRATION_TIME', expirationTime);
  } catch (err) {
    console.error(err)
  }
}