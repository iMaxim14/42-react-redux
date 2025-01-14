import { createAppSlice } from "../../createAppSlice"
import type { FeedbackStateSlice } from "./types"

const feedbackInititalState: FeedbackStateSlice = {
  grade: [{ likes: 0, dislikes: 0 }],
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInititalState,
  reducers: create => ({
    plusLike: create.reducer((state: FeedbackStateSlice) => {
      state.grade[0].likes = state.grade[0].likes + 1
    }),

    plusDislike: create.reducer((state: FeedbackStateSlice) => {
      state.grade[0].dislikes = state.grade[0].dislikes + 1
    }),

    reset: create.reducer((state: FeedbackStateSlice) => {
      state.grade[0].likes = 0
      state.grade[0].dislikes = 0
    }),
  }),

  selectors: {
    grade: (state: FeedbackStateSlice) => state.grade,
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
