import React, { useEffect, useState } from "react";
import rock from "../images/rockPic.png"
import scissors from "../images/scissorsPic.png"
import paper from "../images/paperPic.png"
import rules from "../images/rulesPic.jpg"
import cl from "./styles/App.module.css"
import MyButton from "./UI/MyButton";
import MyModal from "./UI/MyModal";

function Game({ player, ai, score, setScore, setAiChoice }) {

  const [modal, setModal] = useState(false)

  // const chooseWinner = () => {
  //     if(playerChoice === "rock" && aiChoice === "scissors") {
  //       setResult("Игрок победил")
  //       setPlayerScore(playerScore + 1)
  //     } else if(playerChoice === "rock" && aiChoice === "paper") {
  //       setResult("Игрок проиграл")
  //       setAiScore(aiScore + 1)
  //     } else if(playerChoice === "scissors" && aiChoice === "paper") {
  //       setResult("Игрок победил")
  //       setPlayerScore(playerScore + 1)
  //     } else if(playerChoice === "scissors" && aiChoice === "rock") {
  //       setResult("Игрок проиграл")
  //       setAiScore(aiScore + 1)
  //     } else if(playerChoice === "paper" && aiChoice === "rock") {
  //       setResult("Игрок победил")
  //       setPlayerScore(playerScore + 1)
  //     } else if(playerChoice === "paper" && aiChoice === "scissors") {
  //       setResult("Игрок проиграл")
  //       setAiScore(aiScore + 1)
  //     } else {
  //       setResult("Ничья")
  //     }
  //   }

  // const myPick = props.mine;
  // const housePick = props.house;
  // const [ countDown, setCountDown ] = useState("3");
  // const [ playerPickElement, setPlayerElement ] = useState("");
  // const [ housePickElement, setHouseElement ] = useState("");
  // const [ resultMessage, setResultMessage ] = useState("");
  //
  // const [ playerWins, setPlayerWins ] = useState(false);
  // const [ houseWins, setHouseWins ] = useState(false);
  //
  // function chooseWinner() {
  //   if(player === "rock" && ai === "scissors") {
  //     setPlayerWins(true);
  //     setHouseWins(false);
  //   } else if(player === "rock" && ai === "paper") {
  //     setHouseWins(true);
  //     setPlayerWins(false);
  //   } else if(player === "scissors" && ai === "paper") {
  //     setPlayerWins(true);
  //     setHouseWins(false);
  //   } else if(player === "scissors" && ai === "rock") {
  //     setHouseWins(true);
  //     setPlayerWins(false);
  //   } else if(player === "paper" && ai === "rock") {
  //     setPlayerWins(true);
  //     setHouseWins(false);
  //   } else if(player === "paper" && ai === "scissors") {
  //     setHouseWins(true);
  //     setPlayerWins(false);
  //   } else {
  //     setHouseWins(false);
  //     setPlayerWins(false);
  //   }
  // }
  //
  // function showWinner() {
  //
  //   const currentScore = score;
  //
  //   if(playerWins) {
  //     setScore(currentScore + 1);
  //     setResultMessage("You Win");
  //   } else if(houseWins) {
  //     setScore(currentScore - 1);
  //     setResultMessage("You Lose");
  //   } else {
  //     setResultMessage("Draw");
  //   }
  // }
  //
  // function setMyPickIcon(pick) {
  //   if(pick === "rock") {
  //     return rockIcon;
  //   } else if(pick === "paper") {
  //     return paperIcon;
  //   } else if(pick === "scissors") {
  //     return scissorsIcon;
  //   }
  // }
  //
  // function setMyPickClass(pick) {
  //   if(pick === "rock") {
  //     return "pick__rock";
  //   } else if(pick === "paper") {
  //     return "pick__paper";
  //   } else if(pick === "scissors") {
  //     return "pick__scissors";
  //   }
  // }
  //
  // function wait(ms = 0) {
  //   return new Promise(function(resolve) {
  //     setTimeout(resolve, ms);
  //   })
  // }

  // useEffect(() => {
  //
  //   chooseWinner();
  //
  //   wait(500).then(() => {
  //     setCountDown("2");
  //     return wait(500);
  //   }).then(() => {
  //     setCountDown("1");
  //     return wait(500);
  //   }).then(() => {
  //     setHouseElement(
  //       <div className="pick">
  //         <div className="result__desktop pick__title">The House Picked {housePick}</div>
  //         <div className={"pick__item " + (houseWins? "winner " : "") + setMyPickClass(housePick)} style={{backgroundImage: `url(${setMyPickIcon(housePick)}`}}></div>
  //         <div className="result__mobile pick__title">The House Picked {housePick}</div>
  //       </div>
  //     );
  //     setPlayerElement(
  //       <div className="pick">
  //         <div className="result__desktop pick__title">You Picked {myPick}</div>
  //         <div className={"pick__item " + (playerWins? "winner " : "") + setMyPickClass(myPick)} style={{backgroundImage: `url(${setMyPickIcon(myPick)}`}}></div>
  //         <div className="result__mobile pick__title">You Picked {myPick}</div>
  //       </div>
  //     )
  //     showWinner();
  //   })
  //
  // }, [setHouseElement, setCountDown, houseWins, playerWins])

  return (
    <div>
      <h1>
        Камень - ножницы - бумага
      </h1>
      <div className={cl.header}>
        <div className={cl.score__t}>Счет</div>

          <div className={cl.score__player}>
            <span>Игрок</span>
            <div>1</div>
          </div>
          <div className={cl.score__ai}>
            <span>AI</span>
            <div>0</div>
        </div>

      </div>
      <body>
      <div className={cl.game}>
        <img src={rock} />
        <img src={scissors}/>
        <img src={paper}/>
      </div>
      </body>
      <div className={cl.footer}>
        <MyButton onClick={() => setModal(true)}>Правила игры</MyButton>
        <MyModal  visible={modal} setVisible={setModal}>
          <img className={cl.RulesImg} src={rules}/>
        </MyModal>
      </div>
    </div>

    // <div className="play-wrapper">
    //   {playerPickElement? playerPickElement :
    //     <div className="pick">
    //       <div className="result__desktop pick__title">You Picked {myPick}</div>
    //       <div className={"pick__item " + setMyPickClass(myPick)} style={{backgroundImage: `url(${setMyPickIcon(myPick)}`}}></div>
    //       <div className="result__mobile pick__title">You Picked {myPick}</div>
    //     </div>
    //   }
    //   <div className={"result__desktop game__result " + (resultMessage.length? "" : "invisible")}>
    //     <h3>{resultMessage}</h3>
    //     <Link className="play-again__button " to="/" onClick={()=>(props.setHousePick())}>Play Again</Link>
    //   </div>
    //   {housePickElement? housePickElement :
    //     <div className="pick">
    //       <div className="pick__title result__desktop">The House Picked:</div>
    //       <div className="pick__item" ><span>{countDown}</span></div>
    //       <div className="pick__title result__mobile">The House Picked:</div>
    //     </div>
    //   }
    //   <div className={"result__mobile game__result " + (resultMessage.length? "" : "invisible")}>
    //     <h3>{resultMessage}</h3>
    //     <Link className="play-again__button " to="/" onClick={()=>(props.setHousePick())}>Play Again</Link>
    //   </div>
    // </div>
  )
}

export default Game;