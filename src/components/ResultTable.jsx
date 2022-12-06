import React from 'react'
import { questions_list } from './QuestionList'

const ResultTable = ({ userAnswers }) => (
    <table className="table-auto w-full mb-5 hidden sm:table">
        <thead>
            <tr>
                <th className='text-center text-xs pb-2'>Question</th>
                <th className='text-start text-xs w-[15%] px-1 pb-2'>Your</th>
                <th className='text-start text-xs w-[15%] px-1 pb-2'>Correct</th>
            </tr>
        </thead>
        <tbody>
            {userAnswers.map((item, index) =>
                <tr key={questions_list[index].title}>
                    <td className={`${index % 2 ? 'bg-zinc-900' : 'bg-zinc-800'} h-[35px] text-xs rounded-l-xl flex items-center px-6 py-6`}><span className='block min-w-[15px] mr-3'>{index + 1}.</span> {questions_list[index].title}</td>
                    <td className={`${index % 2 ? 'bg-zinc-900' : 'bg-zinc-800'} h-[35px] text-xs px-1`}>{questions_list[index].answers[userAnswers[index]]}</td>
                    <td className={`${index % 2 ? 'bg-zinc-900' : 'bg-zinc-800'} h-[35px] text-xs px-1 rounded-r-xl`}>{questions_list[index].answers[(questions_list[index].correct)]}</td>
                </tr>
            )}
        </tbody>
    </table>
)


export default ResultTable