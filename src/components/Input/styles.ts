// @import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);

import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputStyle = styled.input`
  height: 48px;
  width: 100%;

  &::placeholder {
    color: #6f6f6f;
  }
`;

export const LabelStyle = styled.label`
  font-size: 16px;
  color: #1e1e1e;
`;

// .input-wrapper{
// display: flex;
// flex-direction: column;
// width: 100%;
// }
// .input-style{
//     height: 48px;

// }
// .input-style::placeholder{
//     color: #1E1E1E;
// }

// label {
// font-size: 16px;
// color: #6f6f6f;
//   }
