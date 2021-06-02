import React from "react";
import Select from "react-select";
import {useDispatch} from "react-redux";

export default function CustomSelect({options, value, type}) {
  
  const dispatch = useDispatch()

  const selectStyles = {
    control: (styles, {isFocused}) => ({
      ...styles,
      backgroundColor: "#fff",
      boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0 -3px 6px 0 rgba(0, 0, 0, 0.2)",
      borderColor: isFocused ? "#546462" : "#fff",
      ':hover': {
        borderColor: "#546462"
      }
    }),
    option: (styles, {isSelected}) => ({
      ...styles,
      backgroundColor: isSelected ? "#546462" : "#fff",
      ':active': {
        backgroundColor: "#546462",
        color: "#fff"
      },
      ':hover': {
        backgroundColor: isSelected ? "#546462" : "#B7C0BF",
        color: isSelected ? "#fff" : "#000",
      }
    })
  }
  
  const change = (event) => {
    dispatch({type, payload: event})
  }
  
  return(
    <Select options={options} styles={selectStyles} value={value} onChange={change} />
  )
}