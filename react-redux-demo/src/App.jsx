import { useState } from 'react'
import CakeView from "./features/cake/CakeView";
import IceView from "./features/ice/IceView";
import UserView from "./features/user/UserView";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <CakeView/>
        <IceView/>
        <UserView/>
      </div>
    </>
  )
}

export default App
