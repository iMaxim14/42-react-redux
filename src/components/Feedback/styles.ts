import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const FeedbackWrapper = styled.div`
  border: 2px solid #d8d8d8;
  border-radius: 5px;
  padding: 30px;
  min-width: 400px;
  background-color: #f4fdff;
  display: flex;
  gap: 70px;
`

const likeDislikeStyles = css`
  display: flex;
  align-items: center;
  gap: 30px;
`

const imageBasicStyles = css`
  width: 100px;
  padding-bottom: 25px;
`

const basicQuantityStyles = css`
  font-size: 50px;
  color: #999999;
`

export const LikeWrapper = styled.div`
  ${likeDislikeStyles}
`

export const DislikeWrapper = styled.div`
  ${likeDislikeStyles}
`

export const LikeImage = styled.img`
  ${imageBasicStyles}
`
export const DislikeImage = styled.img`
  ${imageBasicStyles}
  transform: rotate(180deg);
`

export const LikesResult = styled.div`
  ${basicQuantityStyles}
`

export const DislikesResult = styled.div`
  ${basicQuantityStyles}
`

const basicImageWrapper = css`
  border: none;
  background: transparent;
  cursor: pointer;

  &:active {
    transform: translateY(4px);
  }
`

export const LikeImageWrapper = styled.button`
  ${basicImageWrapper}
`

export const DislikeImageWrapper = styled.button`
  ${basicImageWrapper}
`

export const LikeQuantityWrapper = styled.div``

export const DislikeQuantityWrapper = styled.div``
