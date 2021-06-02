import React from 'react'
import './CustomSlayder.css'
import {useDispatch} from "react-redux";

export default function CustomSlayder({isActive}) {
  const dispatch = useDispatch()
  
  
  const click = (event) => {
    dispatch({"type": "SET_ACTIVE_LAYER"})
  }

  return (
    <div className="checkbox-container">
      <label className="white-slaider-checkbox">
        <input type="checkbox" onChange={click} checked={isActive}/>
        <span></span>
        <i className="indicator"></i>
      </label>
    </div>
  )
}