import { createAppSlice } from "../../createAppSlice"
import type { FeedbackStateSlice } from "./types"

const feedbackInititalState: FeedbackStateSlice = {
  grade: [{ countLike: 0, countDislike: 0 }],
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInititalState,
  reducers: create => ({
    plusLike: create.reducer((state: FeedbackStateSlice) => {
      state.grade[0].countLike = state.grade[0].countLike + 1
    }),

    plusDislike: create.reducer((state: FeedbackStateSlice) => {
      state.grade[0].countDislike = state.grade[0].countDislike + 1
    }),
  }),

  selectors: {
    grade: (state: FeedbackStateSlice) => state.grade,
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
