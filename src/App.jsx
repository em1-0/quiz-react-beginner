import { useState } from 'react'
import { quests, Game, Result, MyToggle} from './components'
import Example from './components/Example'

function App() {
  const [userAnswers, setUserAnswers] = useState([])

  /* On button click */
  const onClickReact = (index) => {
    setStep(step+1)
    if (index === quest.correctans) setCorrect(correct + 1)

    const copy = [...userAnswers]
    copy.push(index)
    setUserAnswers(copy)
  }

  /* States */
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  /* Var */
  const quest = quests[step]
  const percent = Math.round((step / quests.length) * 100)

  const [darkMode, setDarkmode] = useState(false)

  const btnDark = (state) => setDarkmode(state)

  return (
    <div className={`w-screen h-screen ${darkMode ? 'dark' : ''} `}>
      <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-br dark:from-neutral-300 dark:to-neutral-500 from-zinc-700 to-black saturate-50'>
      <div className='text-white rounded-xl bg-zinc-900 w-[600px] p-6 m-3 invert dark:invert-0'>
        <div className='text-end mb-5'> <MyToggle btnDark={btnDark}/></div>
        <div className='form__window'>
          {step !== quests.length 
          ? <Game percent={percent} step={step} correct={correct} onClickReact={onClickReact}/> 
          : <Result correct={correct} userAnswers={userAnswers}/>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
