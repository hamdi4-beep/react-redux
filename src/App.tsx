import { selectUsername } from "./features/user/UserSlice"
import { useAppSelector } from "./hooks"

function App() {
  const username = useAppSelector(selectUsername)
  console.log(username)

  return (
    <div className="App"></div>
  )
}

export default App
