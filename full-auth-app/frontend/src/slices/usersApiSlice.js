import { apiSlice } from './apiSlice';

// We define our backend/API endpoint as a const
const USERS_URL = '/api/users';

// .injectEndpoints is a function that uses dependency injection
// it allows us to create our own endpoints in this file and inject them into our endpoints attribute in our apiSlice

// for each endpoint we create a specific function.
// We use all mutation functions below for each endpoint and inside each mutation a query is run
// IMPORTANT to note that is the query has a body(is using data) we pass the query function some data that is then called in the body
// our URLS should match those on our backend/api
// note that we specify the method as method otherwise it defaults to GET

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/auth/logout`,
        method: 'POST'
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data
      }),
    }),
  }),
});

// ==== CONVENTIONS for REDUX/RTK QUERY =====
// each function is exported individually as a hook with the 'use' naming convention
// we have only used mutations in this case because each 
// if we instead used a query ('updateUser: builder.query({})') then we would export as 'useUpdateUserQuery'

export const { 
  useLoginMutation, 
  useLogoutMutation, 
  useRegisterMutation, 
  useUpdateUserMutation 
} = usersApiSlice;