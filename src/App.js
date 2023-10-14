import React,{useState} from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetBtn from "./components/ResetBtn";
import { useEffect } from "react";
const App = () => {

  const WINNING_POSSIBILITY = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [turns, setTurns] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [gameOver,setGameOver]=useState(false )

  useEffect(() => {
    const data1 = JSON.parse(localStorage.getItem('xScore'));
    const data2 = JSON.parse(localStorage.getItem('oScore'));
    console.log(data1)
    console.log(data2)
    if (data1) {
      setXScore(data1)
    }
    if(data2){
      setOScore(data2)
    }
  },[])

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return turns === true ? "X" : "O";
      } else {
        return value;
      }
    })
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === 'O') {
        let Score  = oScore
        Score += 1
        setOScore( Score )
        localStorage.setItem('oScore',JSON.stringify(Score))

      } else {
        let Score = xScore
        Score += 1
        setXScore( Score )
        localStorage.setItem('xScore',JSON.stringify(Score))
      }
    }

    setBoard(updatedBoard);
    setTurns(!turns)

  }

    const checkWinner = (board) => {
      for (let i = 0; i < WINNING_POSSIBILITY.length; i++){
        const [x, y, z] = WINNING_POSSIBILITY[i]
        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
         setGameOver(true)
          return board[x]
        }
      }
  }
  const resetBtn = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null));
  }
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-5 mb-5 text-white">Tic Tac Toe Game</h1>
      <div className="">
        <ScoreBoard xScore={xScore} oScore={oScore}/>
        <Board onClick={gameOver ? resetBtn : handleBoxClick} board={board} />
        <ResetBtn resetbtn={resetBtn} />
     </div>
    </div>
  );
};

export default App;
