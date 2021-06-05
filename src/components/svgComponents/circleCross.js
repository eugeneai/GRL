import React from 'react'

export default function BtnCircleCross({fillColor}) {
  return (
    <button className="BtnCircleCross">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={fillColor}
          d="M9.99994 0C4.46994 0 -6.10352e-05 4.47 -6.10352e-05 10C-6.10352e-05 15.53 4.46994 20 9.99994 20C15.5299 20 19.9999 15.53 19.9999 10C19.9999 4.47 15.5299 0 9.99994 0ZM14.9999 13.59L13.5899 15L9.99994 11.41L6.40994 15L4.99994 13.59L8.58994 10L4.99994 6.41L6.40994 5L9.99994 8.59L13.5899 5L14.9999 6.41L11.4099 10L14.9999 13.59Z"
        />
      </svg>
    </button>
  )
}