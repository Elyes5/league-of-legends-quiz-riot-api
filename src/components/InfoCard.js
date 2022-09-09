import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function InfoCard({imageMode,textMode}) {
  return (
    <div className="flex-col col-span-1 justify-center items-center flex mt-8 cursor-pointer p-3 rounded-xl elem-lighter-blue scl-hov">
        <div className="text-4xl"><FontAwesomeIcon icon={imageMode}/></div>
        <div><h4>{textMode}</h4></div>
    </div>
  )
}
