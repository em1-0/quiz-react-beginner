import { useState } from 'react'
import { Game, Result, MyToggle, questions_list } from './components'

function App() {
  const [userAnswers, setUserAnswers] = useState([]); // Array of questions from ./components/QuestionList.jsx
  const [step, setStep] = useState(0); // Current question - index
  const currentQuestion = questions_list[step] // Current question - object

  const [correct, setCorrect] = useState(0); // Counter - correct answers
  const percent = Math.round((step / questions_list.length) * 100) // Progress bar - percent

  const [darkMode, setDarkmode] = useState(false) // Dark mode
  const btnDark = (state) => setDarkmode(state) // Toggler dark mode

  const onClickReact = (index) => {
    setStep(step + 1)
    if (index === currentQuestion.correct) setCorrect(correct + 1)
    const copy = [...userAnswers]
    copy.push(index)
    setUserAnswers(copy)
  }

  return (
    <div className={`w-screen h-screen ${darkMode ? 'dark' : ''} `}>
      <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-br from-zinc-700 to-black saturate-50 dark:from-neutral-300 dark:to-neutral-500'>
        <div className='text-white rounded-xl bg-zinc-900 w-[600px] p-6 m-3 invert dark:invert-0'>
          <div className='text-end mb-5'>
            <MyToggle btnDark={btnDark} />
          </div>
          <div>
            {step !== questions_list.length
              ? <Game percent={percent} step={step} correct={correct} onClickReact={onClickReact} />
              : <Result correct={correct} userAnswers={userAnswers} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
