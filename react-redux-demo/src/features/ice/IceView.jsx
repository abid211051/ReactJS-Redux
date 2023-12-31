import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {iceOrderd, iceStocked} from './iceSlice'

const IceView = () => {
  const numberOfIce = useSelector(state=>state.ice.numberOfIce);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Number of Ice:- {numberOfIce}</h2>
        <button onClick={()=>dispatch(iceOrderd())}>Order Ice</button>
        <button onClick={()=>dispatch(iceStocked(2))}>Restock Ice</button>
      </div>
    </>
  )
}

export default IceView
