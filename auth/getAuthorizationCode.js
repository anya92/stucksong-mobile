import { AuthSession } from "expo";
import { SPOTIFY_CLIENT_ID } from "react-native-dotenv";

export default async () => {
  const REDIRECT_URL = AuthSession.getRedirectUrl();
  const scopes = "user-top-read";

  try {
    const response = await AuthSession.startAsync({
      authUrl: `https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
        scopes
      )}&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`
    });
    return response.params.code;
  } catch (error) {
    console.log(error);
  }
};
