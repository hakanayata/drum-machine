import { Display } from "./Display";

export const DrumKit = () => {
  const pads = [
    {
      keyText: "Q",
      keyCode: 81,
      id: "Heater-1",
      url: "..sound/Heater-1.mp3",
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
      url: "..sound/Heater-3.mp3",
    },
    {
      keyText: "A",
      keyCode: 65,
      id: "Heater-4",
      url: "..sound/Heater-4_1.mp3",
    },
    {
      keyText: "S",
      keyCode: 83,
      id: "Clap",
      url: "..sound/Heater-6.mp3",
    },
    {
      keyText: "D",
      keyCode: 68,
      id: "Open-HH",
      url: "..sound/Dsc_Oh.mp3",
    },
    {
      keyText: "Z",
      keyCode: 90,
      id: "Kick-n'-Hat",
      url: "..sound/Kick_n_Hat.mp3",
    },
    {
      keyText: "X",
      keyCode: 88,
      id: "Kick",
      url: "..sound/RP4_KICK_1.mp3",
    },
    {
      keyText: "C",
      keyCode: 67,
      id: "Closed-HH",
      url: "..sound/Cev_H2.mp3",
    },
  ];

  return (
    <div className="container">
      <Display />
      {pads.map((pad) => (
        <div
          key={pad.keyCode}
          id={pad.id}
          className="drum-pad"
          onClick={() => console.log("clicked")}
          onKeyDown={() => console.log("key pressed")}
        >
          {pad.keyText}
          <audio className="clip" src={pad.url} id={pad.keyText}></audio>
        </div>
      ))}
    </div>
  );
};
