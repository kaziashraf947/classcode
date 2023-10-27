import Board from "./Board";
import { useState, useEffect } from "react";
const PLAYER_X= "x";
const PLAYER_O="o";
const winningCombination=[
    {combo: [0,1,2], strikeClass:"strike-row-1"},
    {combo: [3,4,5], strikeClass:"strike-row-2"},
    {combo: [6,7,8], strikeClass:"strike-row-3"},
    {combo: [0,3,6], strikeClass:"strike-column-1"},
    {combo: [1,4,7], strikeClass:"strike-column-2"},
    {combo: [2,5,8], strikeClass:"strike-column-3"},
    {combo: [0,4,8], strikeClass:"strike-diagonal-1"},
    {combo: [2,4,6], strikeClass:"strike-diagonal-2"}
];
function checkWinner(tiles, setStrikeClass){
    for(const{combo, strikeClass} of winningCombination){
       const tileValue1=tiles[combo[0]]
       const tileValue2=tiles[combo[1]]
       const tileValue3=tiles[combo[2]]
    }
}
function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn]= useState(PLAYER_X);
    const [strikeClass, setStrikeClass]=useState();
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
 useEffect(()=>{
    checkWinner(tiles, setStrikeClass);
},[tiles])
    return(
        <div>
            <h1>TicTacToe</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass} />
        </div>
    )
    };

export default TicTacToe;
