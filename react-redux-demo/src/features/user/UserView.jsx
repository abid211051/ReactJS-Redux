import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './userSlice'
const UserView = () => {
  // useSelector for getting state data of userSlice
  const data = useSelector(state => state.user);
  // useDispatch use to trigger the action inside userSlice
  const dispatch = useDispatch();
  useEffect(() => {
    // Triggering fetchUser() whenever DOM refresh
    dispatch(fetchUser());
  }, [])
  return (
    <>
      <div>
        <h2>List of users: </h2>
        {data.loading && <h3>Loading...</h3>}
        {data.loading === false && data.users.length != 0 ?
          data.users.map((user) => (
            <p key={user.id}>{user.name}</p>
          )) : null}
        {data.loading=== false && data.error ? <p>{data.error}</p>:null}
      </div>
    </>
  )
}

export default UserView
