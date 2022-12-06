import React from 'react'
import { questions_list } from './QuestionList'

const Game = ({ step, correct, onClickReact, percent }) => {

    return (
        <div>
            {/* Counter questions / Correct answers */}
            <div className='flex flex-col sm:flex-row justify-between'>
                <p className='mb-3 text-xs font-semibold text-gray-400 '>Questions: <span className='font-normal text-white'>{step} out of {questions_list.length}</span></p>
                <p className='mb-3 text-xs font-semibold text-gray-400'>Correct: <span className='font-normal text-white'>{correct} out of {step}</span></p>
            </div>

            {/* Progress bar */}
            <div className='w-full bg-zinc-500 h-[2px] mb-5 rounded-3xl'>
                <div style={{ width: `${percent}%` }} className={`h-full bg-white`}>   </div>
            </div>

            {/* Main */}
            <h2 className='text-center px-3 py-3 bg-zinc-800 rounded-lg font-semibold mb-7 text-white text-xl'>{questions_list[step].title}</h2>
            <ul>
                {questions_list[step].answers.map((item, index) => (
                    <li onClick={() => onClickReact(index)} key={item} className='w-full flex hover:bg-zinc-700 cursor-pointer py-2 bg-zinc-800 rounded-lg text-sm font-normal mb-3 pl-7'>
                        <button className='flex w-full h-full'>
                            <span className='mr-3 w-4 block'>{index + 1}. </span> {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Game