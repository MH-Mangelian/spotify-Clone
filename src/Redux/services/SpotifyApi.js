import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a76a3c7e26msh4d9ab3817a6caaep11e0e6jsnbc8cb8677794',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

fetch('https://spotify81.p.rapidapi.com/track_credits?id=4WNcduiCmDNfmTEz7JvmLv', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

export const SpotifyApi = createApi({
  reducerPath: "SpotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify81.p.rapidapi.com/track_credits",
    prepareHeaders: (headers)=>{
      headers.set('X-RapidAPI-Key', 'a76a3c7e26msh4d9ab3817a6caaep11e0e6jsnbc8cb8677794');

      return headers;
    },
  }),
  endpoints: (builder) => ({
         getTopCharts: builder.query({ query: () => 'track_credits?id=4WNcduiCmDNfmTEz7JvmLv' }),
         getSongsByGenre: builder.query({ query: (genre) => `${genre}` }),
         getSongsByCountry: builder.query({ query: (countryCode) => `${countryCode}` }),
         getSongsBySearch: builder.query({ query: (searchTerm) => `${searchTerm}` }),
         getArtistDetails: builder.query({ query: (artistId) => `${artistId}` }),
         getSongDetails: builder.query({ query: ({ songid }) => `${songid}` }),
         getSongRelated: builder.query({ query: ({ songid }) => `${songid}` }),
      }),
})

export const {
   useGetTopChartsQuery,
   useGetSongsByGenreQuery,
   useGetSongsByCountryQuery,
   useGetSongsBySearchQuery,
   useGetArtistDetailsQuery,
   useGetSongDetailsQuery,
   useGetSongRelatedQuery,
 } = SpotifyApi;
