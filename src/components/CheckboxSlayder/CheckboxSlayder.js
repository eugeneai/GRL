import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import './CheckboxSlayder.css'

import { fetchFeatures } from '../../store/reducers/async/loadAllData'

export default function CheckboxSlayder() {

  const [active, setActive] = useState(false)

  const dispatch = useDispatch()

  const handleClick = () => {
    if (!active) {
      dispatch(fetchFeatures())
      setActive(true)
    }
    dispatch({type: "TOOGLE_VISIBLE"})
  }

  return (
    <div className="checkbox-container">
      <label className="white-slaider-checkbox">
        <input type="checkbox" onChange={handleClick}/>
        <span></span>
        <i className="indicator"></i>
      </label>
    </div>
  )
}