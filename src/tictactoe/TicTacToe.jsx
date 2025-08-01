import '../index.css'
import './TicTacToe.css'
import Board from './Square';
import Intro from '../components/Intro';

function TicTacToePage () {
    return (
        <div className="container">
            
            <Intro title="Tic Tac Toe" description="This is a tic tac toe game devloped with react and node.js"/>

            <div className='ticContainer'>
                <Board />
            </div>
        </div>
    )
}



export default TicTacToePage;