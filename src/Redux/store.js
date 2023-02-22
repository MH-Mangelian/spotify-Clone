import { configureStore } from '@reduxjs/toolkit';
import Player from '../components/MusicPlayer/Player';

import playerReducer from './features/playerSlice';
import { SpotifyApi } from './services/SpotifyApi';

export const store = configureStore({
  reducer: {
    [SpotifyApi.reducerPath]: SpotifyApi.reducer,
    Player:playerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SpotifyApi.middleware),
});
