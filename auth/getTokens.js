import { AsyncStorage } from "react-native";
import { AuthSession } from "expo";
import { encode } from "base-64";

import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "react-native-dotenv";

import getAuthorizationCode from "./getAuthorizationCode";

export default async () => {
  try {
    const AUTHORIZATION_CODE = await getAuthorizationCode();
    const REDIRECT_URL = AuthSession.getRedirectUrl();

    const credsB64 = encode(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credsB64}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `grant_type=authorization_code&code=${AUTHORIZATION_CODE}&redirect_uri=${REDIRECT_URL}`
    });

    const responseJson = await response.json();

    const {
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: expiresIn
    } = responseJson;

    const expirationTime = new Date().getTime() + expiresIn * 1000;

    try {
      await AsyncStorage.setItem("ACCESS_TOKEN", accessToken);
      await AsyncStorage.setItem("REFRESH_TOKEN", refreshToken);
      await AsyncStorage.setItem("EXPIRATION_TIME", String(expirationTime));
    } catch (error) {
      console.log(error);
    }
  } catch (err) {
    console.error(err);
  }
};
