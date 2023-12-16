import './App.css';
import Money from './components/Money';
import Questions from './components/Questions';
import FirstModal from './components/FirstModal';
import CorectModal from './components/CorectModal';
import WrongModal from './components/WrongModal';
import Timer from './components/Timer';
import TimeIsOver from './components/TimeIsOver';
import Resign from './components/Resign';
import { UseGameContext } from './Hooks/UseGameContext';
import { useFetch } from './Hooks/UseFetch';

function App() {
  const { data, isLoading, error } = useFetch("http://localhost:3000/money");
  const { state, dispatch } = UseGameContext();
  const restart = () => {
    dispatch({ type: "setActiveElement", payload: null })
    dispatch({ type: "setQuestionLevel", payload: 1 })
    dispatch({ type: "setTime", payload: 30 })
    dispatch({ type: "setShowWrong", payload: false })
    dispatch({ type: "setShowFirstModal", payload: true })
    dispatch({ type: "setStartTimer", payload: false })
    dispatch({ type: "setShowResign", payload: false })
  }
  const startGame = () => {
    dispatch({ type: "setShowFirstModal", payload: false })
    dispatch({ type: "setStartTimer", payload: true })

  }
  return (
    <div className="App">
      <div className='main-wrapper'>
        <div className='main-sec'>
          <div className='timer'>
            <Timer />
          </div>
          <div className='question-sec'>
            {!state.showFirstModal && <Questions />}
          </div>
        </div>
        <div className='money-sec'>
          {!state.showFirstModal && <Money data={data} isLoading={isLoading} error={error} />}
        </div>
      </div>
      {state.showFirstModal && <FirstModal startGame={startGame} />}
      {state.showCorect && <CorectModal />}
      {state.showWrong && <WrongModal restart={restart} data={data} />}
      {!state.time && <TimeIsOver restart={restart} data={data} />}
      {state.showResign && <Resign restart={restart} data={data} />}
    </div>
  );
}

export default App;
