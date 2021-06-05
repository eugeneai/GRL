import React from 'react'
import Circle from "../svgComponents/circle";
import {useDispatch} from "react-redux";

export default function CustomSelectColor({isUse, value}) {

  const colors = ["#F36161", "#F3A761", "#F3DC61", "#008000", "#6EBDB8", "#4469C7", "#9292F6", ]
  
  const dispatch = useDispatch()
  
  const setSelectedColor = async (color) => {
    if (isUse) {
      await dispatch({type: "TOGGLE_ACTIVE_TAB"})
      await dispatch({type: "SET_COLOR_FOR_ACTIVE_LAYER", payload: color})
      await dispatch({type: "TOGGLE_ACTIVE_TAB"})
    } else {
      await dispatch({type: "SET_COLOR_FOR_ACTIVE_LAYER", payload: color})
    }
  }
  
  const nonActive = {
    borderColor: "#898B8D",
    size: 18, 
    strokeWidth: 0
  }
  const Active = {
    borderColor: "#c2c2c2",
    size: 32,
    strokeWidth: 4
  }
  
  return (
    <div className="ColorBox" >
      { colors.map( (color, key) => {
        if (color === value) {
          return <span key={key} onClick={() => setSelectedColor(color)}><Circle fillColor={color} {...Active} /></span>
        } else {
          return <span key={key} onClick={() => setSelectedColor(color)}><Circle fillColor={color} {...nonActive} /></span>
        }
      })}
    </div>
  )
}