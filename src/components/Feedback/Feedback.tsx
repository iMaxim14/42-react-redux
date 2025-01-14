import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "../../store/redux/feedback/feedbackSlice"

import {
  DislikeImage,
  DislikeImageWrapper,
  DislikeQuantityWrapper,
  DislikesResult,
  DislikeWrapper,
  FeedbackContainer,
  LikeImage,
  LikeImageWrapper,
  LikeQuantityWrapper,
  LikesResult,
  LikeWrapper,
} from "./styles"

import LikeDislikePictures from "../../assets/like-dislike.png"
import { v4 } from "uuid"

function Feedback() {
  const gradeData = useAppSelector(feedbackSliceSelectors.grade)

  const dispatch = useAppDispatch()

  const onPlusDislike = () => {
    dispatch(feedbackSliceActions.plusDislike())
  }

  const onPlusLike = () => {
    dispatch(feedbackSliceActions.plusLike())
  }

  const likeQuantity = gradeData.map(grade => {
    return <LikesResult key={v4()}>{grade.countLike}</LikesResult>
  })

  const dislikeQuantity = gradeData.map(grade => {
    return <DislikesResult key={v4()}>{grade.countDislike}</DislikesResult>
  })

  return (
    <FeedbackContainer>
      <LikeWrapper>
        <LikeImageWrapper onClick={onPlusLike}>
          <LikeImage src={LikeDislikePictures} alt="like" />
        </LikeImageWrapper>

        <LikeQuantityWrapper>{likeQuantity}</LikeQuantityWrapper>
      </LikeWrapper>
      <DislikeWrapper>
        <DislikeQuantityWrapper>{dislikeQuantity}</DislikeQuantityWrapper>
        <DislikeImageWrapper onClick={onPlusDislike}>
          <DislikeImage src={LikeDislikePictures} alt="dislike" />
        </DislikeImageWrapper>
      </DislikeWrapper>
    </FeedbackContainer>
  )
}

export default Feedback
