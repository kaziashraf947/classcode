import Board from "./Board";
import { useState } from "react";
const Player_x= "x";
const PLayer_o="o";
function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn]= useState(Player_x);
    const handleTileClick=(index)=>{
        console.log(index);
    }
    return(
        <div>
            <h1>TicTacToe</h1>
            <Board tiles={tiles} onTileClick={handleTileClick}/>
        </div>
    )
}
export default TicTacToe;