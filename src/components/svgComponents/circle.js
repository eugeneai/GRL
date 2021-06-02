import React from 'react'

export default function Circle({borderColor, fillColor, strokeWidth, size}) {
  return (
    <svg style={{cursor: "pointer"}} height={size} width={size}>
      <circle 
        cx={size/2} 
        cy={size/2} 
        r={(size-strokeWidth)/2} 
        stroke={borderColor} 
        strokeWidth={strokeWidth} 
        fill={fillColor} 
      />
    </svg>
  )
}