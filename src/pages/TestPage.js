import React, {useState, useEffect} from 'react'
import { fetchSparql } from '../store/reducers/async/loadAllData'
import {useDispatch, useSelector} from "react-redux"
import Select from 'react-select'

export default function TestPage() {
  
  const dispatch = useDispatch()
  const [option, setOption] = useState(null)
  const testdata = useSelector(state => state.sparql.test)
  const features = useSelector(state => state.data.features)
  let [data, setData] = useState([])
  
  
  useEffect(() => {
    console.log("useEffect", testdata)
    setData(testdata)
  }, [testdata])

  
  const options = [
    { value: 'HoloceneFaultsName', label: 'HoloceneFaultsName' },
    { value: 'HoloceneFaultsID', label: 'HoloceneFaultsID' },
  ]
  
  const click = () => {
    dispatch(fetchSparql(option))
  }
  
  const onChange = (event) => {
    setOption(event.value)
  }
  
  console.log("data.length: ", data.length)
  console.log(features)
  
  return (
    <div className="TestPage">
      <Select options={options} onChange={onChange}/>
      <button onClick={click}>Загрузить</button>
      
      {data.length > 0 && 
        <ul>
          {data.map((el,idx)  => <li key={idx}>{el}</li>)}
        </ul>
      }
      
      {option === "HoloceneFaultsID" && data.length > 0 &&
        <ul>
          { features.filter((f) => data.includes(f.properties.ID))
                    .map((f, idx) => <li key={idx}>{f.properties.ID} : { f.properties.Name } </li>)
          }      
        
        </ul>
      }
    </div>  
  )
}
