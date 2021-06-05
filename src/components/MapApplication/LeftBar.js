import React from "react";
import CustomRange from "../customComponents/CustomRange"
import CustomSelect from "../customComponents/CustomSelect";
import {seismicOptions, kinematicLevelOptions, historicalAgeOptions} from '../../store/staticData'
import CustomSelectColor from "../customComponents/CustomSelectColor";
import {useSelector} from "react-redux";
import CustomSlayder from "../customComponents/CustomSlayder";


export default function LeftBar() {

  const tabs = useSelector(state => state.newr.tabs)
  const activeTab = useSelector(state => state.newr.activeTab)
  
  return (
    <div className="left-bar">
      <div className="element">
        <label>Видимость</label>
        <CustomSlayder
          isActive={tabs[activeTab].visible}
        />
      </div>
      <div className="element">
        <label>Сейсмоактивность</label>
        <CustomSelect
          type={"SET_SEISMIC"}  
          options={seismicOptions}
          param={"seismicOption"}
          value={tabs[activeTab].seismic}
        />
      </div>
      <div className="element">
        <label>Кинематический тип</label>
        <CustomSelect
          type={"SET_KINEMATIC"}  
          options={kinematicLevelOptions}
          param={"kinematicLevelOption"}
          value={tabs[activeTab].kinematic}
        />
      </div>
      <div className="element">
        <label>Возраст</label>
        <CustomSelect 
          type={"SET_AGE"}
          options={historicalAgeOptions}
          param={"historicalAgeOption"}
          value={tabs[activeTab].age}
        />
      </div>
      <div className="element">
        <label>Толщина</label>
        <CustomRange 
          width={tabs[activeTab].lineWidth}
          isUse={tabs[activeTab].visible}
        />
      </div>
      <div className="element">
        <label>Цвет</label>
        <CustomSelectColor
          isUse={tabs[activeTab].visible}
          value={tabs[activeTab].color}
        />
      </div>
    </div>
  )
}