import React from 'react'
import GuessComponent from './GuessComponent'
import NavbarComponent from './NavbarComponent'
export default function MainComponent() {
  return (
    <div>
    <NavbarComponent/>
    <div className="App">
        <GuessComponent/>
    </div>
    </div>
  )
}
