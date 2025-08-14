import { getUserAsync, selectUser, selectUserStatus } from "./features/user/UserSlice";
import { useAppSelector, useAppDispatch } from "./hooks";

function App() {
  const user = useAppSelector(selectUser)
  const userStatus = useAppSelector(selectUserStatus)
  const dispatch = useAppDispatch();

  console.log(user)

  return (
    <div className="App">
      <p>Status: {userStatus}</p>
      <button disabled={userStatus === 'loading'} onClick={() => dispatch(getUserAsync('mike'))}>Fetch a user from GitHub</button>
    </div>
  )
}

export default App