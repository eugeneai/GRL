import React from "react";
import {useSelector} from "react-redux";

export default function RightBar() {

  const info = useSelector(state => state.newr.info);
  console.log(info);

  return (
    <div className="right-bar">
      <ul>
      {info.map( (property, key) => {
        return (
          <li className="property" key={key}>
            <span className="property__name">{property[0]}: </span>
            <span className="property__value">{property[1]}</span>
          </li>
        );
      })}
      </ul>
    </div>
  );
}
