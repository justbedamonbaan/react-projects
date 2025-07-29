import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import CounterPage from './counter/Counter'
import TicTacToePage from './tictactoe/TicTacToe'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='miniProjects'>
      <header>
        <Navbar />
         
      </header>
      <main>
           <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Counter' element={<CounterPage />}/>
            <Route path='/TicTacToe' element={<TicTacToePage />}/>
          </Routes>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App;
