import { Display } from "./Display";

export const DrumKit = ({ pads, onPlay, onShowText }) => {
  // const playSound = (soundSelector) => {
  //   const sound = document.getElementById(soundSelector);
  //   sound.play();
  // };

  return (
    <div className="container">
      <Display onShowText={onShowText} />
      {pads.map((pad) => (
        <div
          key={pad.keyCode}
          id={pad.id}
          className="drum-pad"
          onClick={() => onPlay(pad.keyText)}
        >
          {pad.keyText}
          <audio className="clip" src={pad.url} id={pad.keyText} />
        </div>
      ))}
    </div>
  );
};

//  without <audio> element
// import { Display } from "./Display";
// import Heater1 from "../sound/Heater1.mp3";
// import Heater2 from "../sound/Heater2.mp3";
// import Heater3 from "../sound/Heater3.mp3";
// import Heater4 from "../sound/Heater4.mp3";
// import Heater5 from "../sound/Heater5.mp3";
// import Kick_n_Hat from "../sound/Kick_n_Hat.mp3";
// import Kick1 from "../sound/Kick1.mp3";
// import Cev_H2 from "../sound/Cev_H2.mp3";
// import Dsc_Oh from "../sound/Dsc_Oh.mp3";

// export const DrumKit = () => {
//   const pads = [
//     {
//       keyText: "Q",
//       keyCode: 81,
//       id: "Heater1",
//       soundID: 1,
//     },
//     {
//       keyText: "W",
//       keyCode: 87,
//       id: "Heater2",
//       soundID: 2,
//     },
//     {
//       keyText: "E",
//       keyCode: 69,
//       id: "Heater3",
//       soundID: 3,
//     },
//     {
//       keyText: "A",
//       keyCode: 65,
//       id: "Heater4",
//       soundID: 4,
//     },
//     {
//       keyText: "S",
//       keyCode: 83,
//       id: "Heater5",
//       soundID: 5,
//     },
//     {
//       keyText: "D",
//       keyCode: 68,
//       id: "Kick_n_Hat",
//       soundID: 6,
//     },
//     {
//       keyText: "Z",
//       keyCode: 90,
//       id: "Kick1",
//       soundID: 7,
//     },
//     {
//       keyText: "X",
//       keyCode: 88,
//       id: "Cev_H2",
//       soundID: 8,
//     },
//     {
//       keyText: "C",
//       keyCode: 67,
//       id: "Dsc_Oh",
//       soundID: 9,
//     },
//   ];

//   const audios = [
//     Heater1,
//     Heater2,
//     Heater3,
//     Heater4,
//     Heater5,
//     Kick_n_Hat,
//     Kick1,
//     Cev_H2,
//     Dsc_Oh,
//   ];

//   const playSound = (e) => {
//     const soundToPlayId = pads.find((pad) => pad.id == e.target.id).soundID;
//     const soundToPlay = audios[soundToPlayId - 1];
//     const audio = new Audio(soundToPlay);
//     audio.play();
//   };

//   const keyFun = (e) => {
//     console.log(e.key);
//   };

//   return (
//     <div className="container">
//       <Display />
//       {pads.map((pad) => (
//         <div
//           key={pad.soundID}
//           id={pad.id}
//           className="drum-pad"
//           onClick={playSound}
//           onKeyDown={keyFun}
//         >
//           {pad.keyText}
//         </div>
//       ))}
//     </div>
//   );
// };
