import { useDispatch } from 'react-redux'
import CheckboxSlayder from './CheckboxSlayder/CheckboxSlayder'

export default function MenuComponent() {
  const dispatch = useDispatch()

  const changeWidthLine = (event) => {
    dispatch({type: "CHANGE_WEIGHT", payload: Number(event.target.value) })
  }

  return (
    <div className="menu">
      <div className="menu-box">
        <span className="label">Разломы</span>
        <CheckboxSlayder />
      </div>
      <div className="menu-box">
        <span className="label">Поиск</span>
        <div>
          <input className="search-input" type="text" placeholder="Введите название разлома"/>
          <button className="apply-btn">Найти</button>
        </div>
      </div>
      <div className="menu-box">
        <span className="label">Сейсмоактивность</span>
        <div className="select-box">
          <select>
            <option>Любые</option>
            <option>Сейсмоактивные</option>
            <option>Несейсмоактивные</option>
          </select>
        </div>
      </div>
      <div className="menu-box">
        <span className="label">Степень активности</span>
        <div className="select-box">
          <select>
            <option>Любые</option>
            <option>Сейсмоактивные</option>
            <option>Несейсмоактивные</option>
          </select>
        </div>
      </div>
      <div className="menu-box">
        <span className="label">Кинематические типы</span>
        <div className="select-box">
          <select>
            <option>Любые</option>
            <option>Сейсмоактивные</option>
            <option>Несейсмоактивные</option>
          </select>
        </div>
      </div>
      <div className="menu-box">
        <span className="label">Возраст</span>
        <div className="select-box">
          <select>
            <option>Любые</option>
            <option>Сейсмоактивные</option>
            <option>Несейсмоактивные</option>
          </select>
        </div>
      </div>
      <div className="menu-box">
        <input type="range" min="1" max="8" defaultValue="1" onInput={changeWidthLine}/> 
      </div>
    </div>
  )
}