import cl from './components/styles/App.module.css';
import React, { useEffect, useState } from 'react';
import rock from './images/rockPic.png';
import scissors from './images/scissorsPic.png';
import paper from './images/paperPic.png';
import MyButton from './components/UI/MyButton';
import MyModal from './components/UI/MyModal';
import rules from './images/rulesPic.jpg';

function App() {
  const [modal, setModal] = useState(false);
  const [hideChoice, setHideChoice] = useState(true);
  const [playerChoice, setPlayerChoice] = useState('');
  const [aiChoice, setAiChoice] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [result, setResult] = useState('');

  function newAiChoice() {
    const choices = ['rock', 'scissors', 'paper'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setAiChoice(randomChoice);
  }

  const choiceImg = anyChoice => {
    if (anyChoice === 'rock') {
      return rock;
    } else if (anyChoice === 'scissors') {
      return scissors;
    } else {
      return paper;
    }
  };

  const toggleGame = choice => {
    setPlayerChoice(choice);
    newAiChoice();
    setHideChoice(false);
  };

  const chooseWinner = () => {
    if (playerChoice === aiChoice) {
      setResult('Ничья');
    } else if (
      (playerChoice === 'rock' && aiChoice === 'scissors') ||
      (playerChoice === 'paper' && aiChoice === 'rock') ||
      (playerChoice === 'scissors' && aiChoice === 'paper')
    ) {
      setResult('Игрок победил');
      setPlayerScore(playerScore + 1);
    } else {
      setResult('Игрок проиграл');
      setAiScore(aiScore + 1);
    }
  };

  const repeat = () => {
    setPlayerChoice('');
    setAiChoice('');
    setHideChoice(true);
    setResult('');
  };

  useEffect(() => {
    !hideChoice && chooseWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerChoice]);

  return (
    <div className={cl.main}>
      <div className={cl.App}>
        <h1>Камень - ножницы - бумага</h1>
        <div className={cl.header}>
          <div className={cl.score__t}>Счет</div>
          <div className={cl.score__player}>
            <strong>Игрок</strong>
            <div>{playerScore}</div>
          </div>
          <div className={cl.score__ai}>
            <strong>AI</strong>
            <div>{aiScore}</div>
          </div>
        </div>
        <div className={cl.game}>
          {hideChoice ? (
            <div>
              <img src={rock} onClick={() => toggleGame('rock')} alt={rock} />
              <img
                src={scissors}
                onClick={() => toggleGame('scissors')}
                alt={scissors}
              />
              <img
                src={paper}
                onClick={() => toggleGame('paper')}
                alt={paper}
              />
            </div>
          ) : (
            <div className={cl.game__start}>
              <div className={cl.game__player}>
                <h1>Игрок</h1>
                <img src={choiceImg(playerChoice)} alt={playerChoice} />
              </div>
              <div className={cl.game__ai}>
                <h1>AI</h1>
                <img src={choiceImg(aiChoice)} alt={aiChoice} />
              </div>

              <div className={cl.game__result}>
                <h1>{result}</h1>
                <MyButton onClick={() => repeat()}>Играть ещё раз</MyButton>
              </div>
            </div>
          )}
        </div>
        <div className={cl.footer}>
          <MyButton onClick={() => setModal(true)}>Правила игры</MyButton>
          <MyModal visible={modal} setVisible={setModal}>
            <img className={cl.RulesImg} src={rules} alt='' />
          </MyModal>
        </div>
      </div>
    </div>
  );
}

export default App;
