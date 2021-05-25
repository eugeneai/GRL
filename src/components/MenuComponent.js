import React from "react";
import Select from "react-select";
import { useDispatch } from 'react-redux'
import CheckboxSlayder from './CheckboxSlayder/CheckboxSlayder'
import { fetchSparql } from "../store/reducers/async/loadAllData";

const seismicOptions = [
  { value: {type: "LOAD_DATA_BY_SEISMIC", option: "All"}, label: "Все" },
  { value: {type: "LOAD_DATA_BY_SEISMIC", option: "SeismicallyActiveFault"}, label: "Сейсмоактивные" },
]
const kinematicLevelOptions = [
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "All"}, label: "Все" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "NormalSlCB"}, label: "Сбросы" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "ShiftNormalCB"}, label: "Сдвиго-сбросы" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "UpLiftCB"}, label: "Взбросы" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "ShiftUpCB"}, label: "Сдвиго-взбросы" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "LeftSCB"}, label: "Левые сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "LeftNSCB"}, label: "Левые сбросо-сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "RightNSCB"}, label: "Правые сбросо-сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "RightUSCB"}, label: "Правые взбросо-сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "RightSCB"}, label: "Правые сдвиги" },
  { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "LeftUSCB"}, label: "Левые взбросо-сдвиги" },
]
const historicalAgeOptions = [
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "All"}, label: "Все" },
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "HistoricalFaultsID"}, label: "Исторический" },
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "HoloceneFaultsID"}, label: "Голоценовый" },
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "PleistoceneFaultsID"}, label: "Плейстоценовый" },
  { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "PlioceneFaultsID"}, label: "Плиоценовый" },
]

export default function MenuComponent() {
  const dispatch = useDispatch()
  
  const changeWidthLine = (event) => {
    dispatch({type: "CHANGE_WEIGHT", payload: Number(event.target.value) })
  }
  
  const chooseOption = (event) => {
    dispatch(fetchSparql(event.value))  
  }
  
  return (
    <div className="menu">
      <div className="menu-box">
        <span className="label">Разломы</span>
        <CheckboxSlayder />
      </div>
      <div className="menu-box">
        <span className="label">Сейсмоактивность</span>
        <div className="select-box">
          <Select 
            options={seismicOptions} 
            defaultValue={seismicOptions[0]}
            onChange={chooseOption}
          />
        </div>
      </div>
      <div className="menu-box">
        <span className="label">Кинематические типы</span>
        <div className="select-box">
          <Select 
            options={kinematicLevelOptions} 
            defaultValue={kinematicLevelOptions[0]}
            onChange={chooseOption}
          />
        </div>
      </div>
      <div className="menu-box">
        <span className="label">Возраст</span>
        <div className="select-box">
          <Select 
            options={historicalAgeOptions} 
            defaultValue={historicalAgeOptions[0]}
            onChange={chooseOption}
          />
        </div>
      </div>
      <div className="menu-box">
        <input type="range" min="1" max="8" defaultValue="1" onInput={changeWidthLine}/> 
      </div>
    </div>
  )
}