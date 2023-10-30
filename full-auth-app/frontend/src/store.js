import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';

// This file is solely used to configure our store which is then imported into our entry point.
// We import each individual reducer and add it to the reducers object 
// EXAMPLE: if we added a postsReducer we would import it and set it in the object as posts: postReducer

// Notice how we access our api slice reducer here: 
// If you check the REDUX dev tools you will notice that this returns a api attribute in our return object.
// this attribute has a range of other objects such as queries and mutations which we can work with.
// Queries are for fetching data 
// Mutations are doing something in the backend such as adding/amending data

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

// at the end of the middleware we pass out apislice middleware by concatinating at to the existing defailt middleware array.

export default store;
