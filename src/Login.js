import React from "react";

const AUTH_URL ="http://accounts.spotify.com/authorize?client_id=de220959825a4d8eae8c664e27e25369&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

//const GET = "https://api.spotify.com/v1/users/de220959825a4d8eae8c664e27e25369/playlists"

const Login = () => {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <a href={AUTH_URL} className="border-green-600 text-center text-white m-2 p-2 bg-green-600 rounded-md	 md:text-2xl ">
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;
