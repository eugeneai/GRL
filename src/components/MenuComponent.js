import React from "react";
import Select from "react-select";
import { useDispatch } from 'react-redux'
import CheckboxSlayder from './CheckboxSlayder/CheckboxSlayder'
import { fetchSparql } from "../store/reducers/async/loadAllData";

const seismicOptions = [
  { value: "All", label: "Все" },
  { value: "SeismicallyActiveFault", label: "Сейсмоактивные" },
]

const activityLevelOptions = [
  { value: "All", label: "Все" },
  { value: "1", label: "Аномально высокая" },
  { value: "3", label: "Повышенная" },
  { value: "2", label: "Высокая" },
  { value: "4", label: "Средняя" },
  { value: "5", label: "Слабая" },
]

const kinematicLevelOptions = [
  { value: "All", label: "Все" },
  { value: "NormalSlCB", label: "Сбросы" },
  { value: "ShiftNormalCB", label: "Сдвиго-сбросы" },
  { value: "UpLiftCB", label: "Взбросы" },
  { value: "ShiftUpCB", label: "Сдвиго-взбросы" },
  { value: "LeftSCB", label: "Левые сдвиги" },
  { value: "LeftNSCB", label: "Левые сбросо-сдвиги" },
  { value: "RightNSCB", label: "Правые сбросо-сдвиги" },
  { value: "RightUSCB", label: "Правые взбросо-сдвиги" },
  { value: "RightSCB", label: "Правые сдвиги" },
  { value: "LeftUSCB", label: "Левые взбросо-сдвиги" },
]

const historicalAgeOptions = [
  { value: "All", label: "Все" },
  { value: "HistoricalFaultsID", label: "Исторический" },
  { value: "HoloceneFaultsID", label: "Голоценовый" },
  { value: "PleistoceneFaultsID", label: "Плейстоценовый" },
  { value: "PlioceneFaultsID", label: "Плиоценовый" },
]

export default function MenuComponent() {
  const dispatch = useDispatch()
  
  const changeWidthLine = (event) => {
    dispatch({type: "CHANGE_WEIGHT", payload: Number(event.target.value) })
  }
  
  const chooseOption = (event) => {
    if (event.value === "All") {
      dispatch({type: "CLEAR"})
      return
    } 
    dispatch(fetchSparql(event.value))  
  }
  
  return (
    <div className="menu">
      <div className="menu-box">
        <span className="label">Разломы</span>
        <CheckboxSlayder />
      </div>
      {/*<div className="menu-box">*/}
      {/*  <span className="label">Поиск</span>*/}
      {/*  <div>*/}
      {/*    <input className="search-input" type="text" placeholder="Введите название разлома"/>*/}
      {/*    <button className="apply-btn">Найти</button>*/}
      {/*  </div>*/}
      {/*</div>*/}
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
      {/*<div className="menu-box">*/}
      {/*  <span className="label">Степень активности</span>*/}
      {/*  <div className="select-box">*/}
      {/*    <Select */}
      {/*      options={activityLevelOptions} */}
      {/*      defaultValue={activityLevelOptions[0]}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
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