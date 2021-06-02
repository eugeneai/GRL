import React from "react";
import CustomRange from "../customComponents/CustomRange"
import CustomSelect from "../customComponents/CustomSelect";
import {seismicOptions, kinematicLevelOptions, historicalAgeOptions} from '../../store/staticData'
import CustomSelectColor from "../customComponents/CustomSelectColor";
import {useSelector} from "react-redux";
import CustomSlayder from "../customComponents/CustomSlayder";


export default function LeftBar() {

  const options = useSelector(state => state.newr.options)
  const activeTab = useSelector(state => state.newr.activeTab)
  
  
  return (
    <div className="left-bar">
      <div className="element">
        <label>Видимость</label>
        <CustomSlayder
          isActive={options[activeTab].visible}
        />
      </div>
      <div className="element">
        <label>Сейсмоактивность</label>
        <CustomSelect
          type={"SET_SEISMIC"}  
          options={seismicOptions}
          value={options[activeTab].seismic}
        />
      </div>
      <div className="element">
        <label>Кинематический тип</label>
        <CustomSelect
          type={"SET_KINEMATIC"}  
          options={kinematicLevelOptions}
          value={options[activeTab].kinematic}
        />
      </div>
      <div className="element">
        <label>Возраст</label>
        <CustomSelect 
          type={"SET_AGE"}
          options={historicalAgeOptions}
          value={options[activeTab].age}
        />
      </div>
      <div className="element">
        <label>Толщина</label>
        <CustomRange 
          width={options[activeTab].lineWidth}
        />
      </div>
      <div className="element">
        <label>Цвет</label>
        <CustomSelectColor />
      </div>
    </div>
  )
}