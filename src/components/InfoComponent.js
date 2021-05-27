import React from 'react'
import {useSelector} from "react-redux";

export default function InfoComponent() {
  
  const infoBlock = useSelector(state => state.interface.infoBlock)
  
  return(
    <div className={"InfoComponent"}>
      {infoBlock.visible &&
        <ul>
          { infoBlock.data.map(property => <li>{property[0]}: {property[1]}</li>) }
        </ul>
      }
    </div>
  )
}
