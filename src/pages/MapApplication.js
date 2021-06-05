import React, {useEffect} from 'react'
import TopBar from "../components/MapApplication/TopBar";
import LeftBar from "../components/MapApplication/LeftBar";
import RightBar from "../components/MapApplication/RightBar";
import AppMap from "../components/MapApplication/AppMap/AppMap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllIds, fetchFeatures} from "../store/reducers/async/middleware";

export default function MapApplication() {
  
  const dispatch = useDispatch()

  const countTab = useSelector(state => state.newr.countTabs)
  useEffect(() => {
    dispatch(fetchFeatures())
    for(let i=0; i<countTab; i++) {
      dispatch(fetchAllIds(i))
    }
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

