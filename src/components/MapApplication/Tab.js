import React from "react"
import Circle from "../svgComponents/circle";
import BtnCircleCross from "../svgComponents/circleCross";
import {useDispatch} from "react-redux";

export default function Tab({id, isActive, name, color}) {
  
  const dispatch = useDispatch()
  
  const click = () => {
    dispatch({type: "SET_ACTIVE_TAB", payload: id})
  }
  
  return (
    <div
      className={isActive ? "tab tab-active" : "tab"}
      onClick={click}
    >
      <div className="tab_label">
        <Circle fillColor={color} borderColor={"#FAFAFA"} strokeWidth={2} size={26}/>
        <p>{name}</p>
      </div>
      <BtnCircleCross 
        fillColor={ isActive ? "#B7C0BF" : "#546462"}
      />
    </div>
  )
}