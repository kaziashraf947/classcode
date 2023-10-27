import Board from "./Board";
import { useState } from "react";
const PLAYER_X= "x";
const PLAYER_O="o";
function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    let [playerTurn, setPlayerTurn]= useState(PLAYER_X);
    const handleTileClick=(index)=>{
        if(tiles[index]!==null){
            return;
        }
        const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
};
    return(
        <div>
            <h1>TicTacToe</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
        </div>
    )
    };

export default TicTacToe;
