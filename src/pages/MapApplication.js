import React, {useEffect} from 'react'
import TopBar from "../components/MapApplication/TopBar";
import LeftBar from "../components/MapApplication/LeftBar";
import RightBar from "../components/MapApplication/RightBar";
import AppMap from "../components/MapApplication/AppMap/AppMap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllIds} from "../store/reducers/async/middleware";
import {fetchFeatures} from "../store/reducers/async/loadAllData";

export default function MapApplication() {
  
  const dispatch = useDispatch()

  const countTab = useSelector(state => state.newr.countTabs)
  useEffect(() => {
    for(let i=0; i<countTab; i++) {
      dispatch(fetchAllIds(i))
    }
    dispatch(fetchFeatures())
  })
  
  return (
      <div className="interface-wrapper">
        <TopBar />
        <LeftBar />
        <RightBar />
        <AppMap />
      </div>
  );
}

