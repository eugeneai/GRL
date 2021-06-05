import React from 'react';
import {fetchInfoByID} from "../../store/reducers/async/middleware";
import {useDispatch} from "react-redux";

export default function CustomBtnInfo({id}) {

  const dispatch = useDispatch()

  const getInfo = () => {
    dispatch(fetchInfoByID(id))
  }

  return (
    <button 
      type="button" 
      className="btn btn-outline-dark" 
      onClick={getInfo}
    >
      Подробнее
    </button>
  )
} 