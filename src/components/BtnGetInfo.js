import React from 'react'
import {fetchInfoByID} from "../store/reducers/async/loadAllData";
import {useDispatch} from "react-redux";

export default function BtnGetInfo({id}) {
  
  const dispatch = useDispatch()
  
  const getInfo = () => {
    dispatch(fetchInfoByID(id))
  }
  
  return (
    <button onClick={getInfo}>Подробнее</button>
  )
} 