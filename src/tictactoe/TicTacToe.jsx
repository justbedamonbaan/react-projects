import '../index.css'
import './TicTacToe.css'
import Board from './Square';
import Intro from '../components/Intro';

function TicTacToePage () {
    return (
        <div className="container">
            {/* <div className="pageIntro">
                <h1 className='introTitle'>Tic Tac Toe</h1>
                <div className="br"></div>
                <p className="description">This is a tic tac toe game devloped with react and node.js</p>
            </div > */}
            
            <Intro title="Tic Tac Toe" description="This is a tic tac toe game devloped with react and node.js"/>

            <div className='ticContainer'>
                <Board />
            </div>
        </div>
    )
}



export default TicTacToePage;