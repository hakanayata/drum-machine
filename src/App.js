import React from "react";
import { DrumKit } from "./components/DrumKit";
import { Header } from "./components/Header";
import { useState, useEffect, useRef } from "react";



function App() {

  const pads = [
    {
      keyText: "Q",
      keyCode: 81,
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyText: "W",
      keyCode: 87,
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyText: "E",
      keyCode: 69,
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyText: "A",
      keyCode: 65,
      id: "Heater-4_1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyText: "S",
      keyCode: 83,
      id: "Heater5",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyText: "D",
      keyCode: 68,
      id: "Kick_n_Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyText: "Z",
      keyCode: 90,
      id: "Kick1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyText: "X",
      keyCode: 88,
      id: "Cev_H2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyText: "C",
      keyCode: 67,
      id: "Dsc_Oh",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [soundText, setSoundText] = useState(null)

  const playSound = (soundSelector) => {
    // console.log('selector: ', soundSelector)
    setSoundText(pads.find((pad) => pad.keyText == soundSelector).id)
    const sound = document.getElementById(soundSelector)
    // console.log('sound: ', sound)
    sound.play();
  }


  const keyDownFunc = (e) => {
    const pressedKey = e.key;
    const pressedKeyUC = pressedKey.toUpperCase();
    if(pads.find((pad) => pad.keyText == pressedKeyUC)) {
      playSound(pressedKeyUC);
    } else {
      console.log('no such key assigned to a drum pad')
    }
  }

  // we use Ref Hook to create ref object which will gives an access to div element
  const ref = useRef(null);
  // when the page loads 'focus' on an element that has its ref key assigned to {ref}. -> it is #drum-machine div in our case
  useEffect(() => {
    ref.current.focus()
  }, [])
  
  return (
    <div 
    id="drum-machine" 
    ref={ref} 
    tabIndex={0} 
    onKeyDown={keyDownFunc}>
      <Header />
      <DrumKit pads={pads} onPlay={playSound} onShowText={soundText} />
    </div>
  );
}

export default App;
