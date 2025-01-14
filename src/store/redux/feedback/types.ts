export interface GradeData {
  likes: number
  dislikes: number
}

export interface FeedbackStateSlice {
  grade: GradeData[]
}
