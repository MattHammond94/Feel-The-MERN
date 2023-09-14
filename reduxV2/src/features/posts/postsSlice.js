import { createSlice, nanoid  } from "@reduxjs/toolkit";
import { sub } from 'date-fns';


const initialState = [
  { id: '1', title: 'Learning Redux Toolkit', content: "I've heard good things", date: sub(new Date(), { hours: 48 }).toISOString() },
  { id: '2', title: 'Slices...', content: "More slices dude", date: sub(new Date(), { minutes: 125 }).toISOString() }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId
          }
        }
      },
    }
  }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer