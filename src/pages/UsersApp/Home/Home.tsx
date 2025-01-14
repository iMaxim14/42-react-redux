import { useFormik } from "formik"

import Input from "../../../components/Input/Input"
import Button from "../../../components/Button/Button"

import { HomePageWrapper, UserForm, UserFormName } from "./styles"
// eslint-disable-next-line @typescript-eslint/no-redeclare
import type { UserFormData} from "./types";
import { USER_FORM_VALUES } from "./types"
import { useAppDispatch } from "../../../store/hooks";
import { usersSliceActions } from "../../../store/redux/users/userSlice";
import { v4 } from "uuid";


function Home() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      [USER_FORM_VALUES.USER_NAME]: '',
      [USER_FORM_VALUES.AGE]: '',
      [USER_FORM_VALUES.JOB_TITLE]: '',
    } as UserFormData,
    onSubmit: (values) => {
      dispatch(usersSliceActions.addUser({...values, id: v4()}))
    }
  })

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          inputName={USER_FORM_VALUES.USER_NAME}
          inputPlaceholder="Enter fullname"
          value={formik.values[USER_FORM_VALUES.USER_NAME]}
          inputLabel="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          inputName={USER_FORM_VALUES.AGE}
          inputPlaceholder="Enter age"
          value={formik.values[USER_FORM_VALUES.AGE]}
          inputLabel="Age"
          onChange={formik.handleChange}
        />
        <Input
          inputName={USER_FORM_VALUES.JOB_TITLE}
          inputPlaceholder="Enter job"
          value={formik.values[USER_FORM_VALUES.JOB_TITLE]}
          inputLabel="Job title"
          onChange={formik.handleChange}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}
export default Home