import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// The base query would be the api in use. In this case we used a proxy in our vite config so this is left empty
// otherwise we would use our localhost url
const baseQuery = fetchBaseQuery({ baseUrl: '' });

// The tagtypes is used for cacheing. Caching allows you to do one fetch req and cache data to prevent from having to keep 
// fetching data from our API. In this case we only have a users collection in our DB so we only have Users in the array. 
// IF we had further collections/objects we would need to add those here.
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({})
});

// endpoints takes a builder - Similarly as above if we had further collections then we would define the endpoints at which
// req would be sent to for each collection/class type. In this case we only have users so we define our endpoints in the usersApiSlice file.
// Notice in usersApiSlice how we use inject endpoints to pass in our created endpoints.
