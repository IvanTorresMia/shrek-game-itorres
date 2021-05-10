import React, { useState, useRef, useEffect } from "react";
import NavBar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Characters from "./Characters.js";
import Card from "./components/Card";
import Score from "./components/Score";
import MusicControl from './components/MusicControl';
import "./App.css";
import Song from "./Images/4_29.mp3";

let hasBeenClicked = [];

function App() {


useEffect(() => {
  volume.current.pause();
}, [])

  const [data, setData] = useState({
    // THIS IS STORING ALL MY JSON FILE
    Characters: Characters,
  });
  const [message, setMessage] = useState("Click a picture to start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const[messageStyle, setMessageStyle] = useState("");
  const [scoreStyle, setScoreStyle] = useState("");
  const [topScoreStyle, setTopScoreStyle] = useState("")
  const volume = useRef(null);
  const [music, setMusic] = useState(true);

const handleMusic = () => {

  if (!music) {
    setMusic(true)
    volume.current.play();
  } else {
    setMusic(false)
    volume.current.pause()
  }

}



  const handleClick = (event) => {
    console.log(event.target);
    const currentId = event.target.getAttribute("data-id");
    volume.current.volume = 0.7;
    volume.current.play();
    console.log(hasBeenClicked); 

    setMessage("Let's play");

    if (!hasBeenClicked.includes(currentId)) {
      hasBeenClicked.push(currentId);
      let newCount = JSON.parse(score + 1);
     
      // const highScoreCount = data.highScore +1;
      setScore(newCount);
      setMessage("Nice!");
      setMessageStyle("message-text correct");
      setScoreStyle("scoreColor");
      if (newCount > highScore) {
        setHighScore(newCount);
      }
    } else {
      setScore(0);
      setMessage("oops!");
      setTopScoreStyle("topScoreColor");
      setMessageStyle(" message-text wrong");
      hasBeenClicked = [];
    }

    // Shuffles the array of characters
    const arr = data.Characters;
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    setData({ ...data, Characters: arr });
  };


    return (
      <>
        <NavBar />
        <Wrapper>
          <MusicControl
          handleMusic={handleMusic}
           />
          <audio className="float-right" autoPlay loop id="gameAudio" ref={volume}>
            <source src={Song} type="audio/mpeg" />
          </audio>
          <Score
            scoreStyle={scoreStyle}
            topScoreStyle={topScoreStyle}
            messageStyle={messageStyle}
            score={score}
            topScore={highScore}
            message={message}
          />
          <div className="container card-container">
            <div className="row card-row">
              {data.Characters.map((character) => (
                <Card
                  key={character.id}
                  imageURL={character.image}
                  id={character.id}
                  alt={character.name}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </>
    );

}

export default App;
