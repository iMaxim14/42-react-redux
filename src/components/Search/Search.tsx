/* eslint-disable react-hooks/exhaustive-deps */
import type { ChangeEvent } from "react"
import { useEffect, useState } from "react"
import Input from "../Input/Input"
import { SearchContainer } from "./styles"
import axios from "axios"
import type { UserDate } from "./types"

function Search() {
  const [search, setSeacrh] = useState<string>("")
  const [objects, setObjects] = useState<UserDate[]>([])

  const DATA = `https://randomuser.me/api/?results=10&name=${search}`

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSeacrh(event.target.value)
  }

  const filterDataArray = (usersArray: any) => {

    return(
    usersArray.map((user: any) => ({
      name: user.name,
      email: user.email,
      fotoURL: user.picture.medium,
      country: user.location.country,
    })))
  }

  const fetchDate = async () => {
    try {
      const response = await axios.get(DATA)
      console.log(response)
      setObjects(filterDataArray(response.data.results))
      console.log(objects );
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDate()
  }, [search])

  return (
    <SearchContainer>
      <Input
        inputName="userSearch"
        inputPlaceholder="search"
        inputLabel="User search"
        id="user"
        onChange={handleInputChange}
        value={search}
      />
    </SearchContainer>
  )
}

export default Search
