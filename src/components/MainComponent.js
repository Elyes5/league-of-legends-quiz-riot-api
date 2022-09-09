import GuessComponent from './GuessComponent'
import NavbarComponent from './NavbarComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PlayComponent from './PlayComponent'
export default function MainComponent() {
  const [heroes,setHeroes] = useState([]);
  const randomize = entry =>{
    return Math.floor(Math.random() * entry);
  }

  const [selectedHero,setSelectedHero] = useState(randomize(150));
 const getRandomHero = nbHeroes => {
     let c = randomize(nbHeroes);
        setSelectedHero(c);
  }
  useEffect(() =>{
    if (!localStorage.getItem('score'))
    localStorage.setItem('score',0)
    fetch("http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json")
    .then(response => response.json())
    .then(data => {
        setHeroes(Object.keys(data.data));
    });
  },[])
  return (
    
    <div>
        <BrowserRouter>
        <NavbarComponent/>
        
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<GuessComponent onClick={() => getRandomHero(heroes.length)}/>}></Route>
                    <Route exact path='/abilities' element={<PlayComponent champion={heroes[selectedHero]} onClick={() => getRandomHero(heroes.length)}/>}></Route>
                </Routes>
            </div>
         </BrowserRouter>
    </div>
  )
}
