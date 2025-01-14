export interface GradeData {
    countLike: number,
    countDislike: number
}

export interface FeedbackStateSlice {
    grade: GradeData[],
}