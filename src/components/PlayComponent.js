import { useEffect,useState } from "react"
import LoaderComponent from "./LoaderComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function PlayComponent(props) {
    const [spell,setSpell] = useState([])
    const [name,setName] = useState('')
    const [loading,setLoading] = useState(true);
    const [isWrong,setIsWrong] = useState(false);
    const [spellNumber,setSpellNumber] = useState( Math.floor(Math.random() * 4));
    const checkAnswer = () =>{
        if (name.toLowerCase() === spell.name.toLowerCase())
        {    
            props.onClick();
            setSpellNumber(Math.floor(Math.random() * 4) + 1);
            const c = JSON.parse(localStorage.getItem('score'));
            localStorage.setItem("score",c+10);
            setName('');
            setIsWrong(false);
        }
        else{
            setIsWrong(true);
        }
    }
    useEffect(() =>{
    if (props.champion){
    
    fetch(`https://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${props.champion}.json`)
    .then(response => response.json())
    .then(data => {setSpell({img : data.data[props.champion].spells[spellNumber].image.full,name:data.data[props.champion].spells[spellNumber].name});setLoading(false)});
}},[props.champion,spellNumber])
  return (
    <div className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 p-10 rounded-xl shadow-2xl elem-dark-blue flex justify-center items-center container">
        {!loading && props.champion ? 
        <div className="max-h max-w flex justify-center items-center flex-col">
            <h4 className="text-white sm:text-xl text-sm mb-8">What's the name of this spell ?</h4>
           <img className="h-24 w-24" src={"https://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/"+spell.img} alt="spell"></img>
           <div  className="mt-8 flex items-center">
           <input className="text-white p-2 rounded-bl-lg rounded-tl-lg elem-lighter-blue" type="text" value={name} onChange={ event => setName(event.target.value)} placeholder="Spell Name"></input>
           <button className=" min-h-full p-2 text-white bg-dark-blue rounded-tr-lg rounded-br-lg" onClick={checkAnswer}>
           <FontAwesomeIcon icon="caret-right"/>
           </button>

           </div>
           <div className="mt-5">
            {isWrong && <p className="text-red-400"><FontAwesomeIcon icon="times-circle"/> Nope ! It's wrong</p>}
            </div>
        </div>
        : 
        <div>
            <LoaderComponent/>
            
        </div>
}
    </div>
  )
}
