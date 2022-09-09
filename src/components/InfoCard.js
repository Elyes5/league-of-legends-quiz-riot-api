import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export default function InfoCard({imageMode,textMode,onClick}) {
  return (
    <div onClick={() => onClick()} className="flex-col col-span-1 justify-center items-center flex mt-8 cursor-pointer p-3 rounded-xl elem-lighter-blue scl-hov">
        <Link to={textMode==='Abilities' ? "/abilities" : ''}>
        <div className="text-4xl"><FontAwesomeIcon icon={imageMode}/></div>
        <div><h4>{textMode}</h4></div>
        </Link>
    </div>
  )
}
