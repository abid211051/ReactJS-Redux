import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {cakeOrderd, cakeStocked} from './cakeSlice'
const CakeView = () => {
  const numberOfCake = useSelector(state=>state.cake.numberOfCake);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Number of Cake:- {numberOfCake}</h2>
        <button onClick={()=>dispatch(cakeOrderd())}>Order Cake</button>
        <button onClick={()=>dispatch(cakeStocked(3))}>Restock Cake</button>
      </div>
    </>
  )
}

export default CakeView
