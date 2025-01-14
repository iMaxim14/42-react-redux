import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import { usersSliceSelectors } from "../../../store/redux/users/userSlice"
import { useAppSelector } from "../../../store/hooks"
import { v4 } from "uuid";

function Users() {
  const userData = useAppSelector(usersSliceSelectors.users);
  console.log(userData);

  const userCards = userData.map((user)=>{
    return(
      <UserCard key={v4()}>
        <Paragraph>Name: {user.userName}</Paragraph>
        <Paragraph>Age: {user.age}</Paragraph>
        <Paragraph>Jon Titile: {user.jobTitle}</Paragraph>
      </UserCard>
    ) 
  })
  
  return (
    <UsersPageWrapper>
      {userCards}
    </UsersPageWrapper>
  )
}

export default Users
