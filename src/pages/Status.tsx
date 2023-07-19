/*Comentários Tweet*/

import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"



export function Status(){
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'Sim',
        'Verdad'
    ])
    function createNewAnswer(event: FormEvent){
        event.preventDefault()

        setAnswers([newAnswer, ...answers ])
        setNewAnswer('')
/*Para melhorar a perfomance todos os valores que o React for checar o tempo
inteiro é interessante declarar ele dentro do useState e como o setTweets seta um novo valor
usamos "...tweets" para pegar os Tweets antigos também
*/
    }

    function handleHotkeySubmit(event: KeyboardEvent){ //enviar tweet com ctrl+enter
      if (event.key === 'Enter' && event.ctrlKey){
        setAnswers([newAnswer, ...answers ])
        setNewAnswer('')
      }
    }
    return(
        <main className='status'>
            <Header title='Tweet'/>
          
            <Tweet content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non dolor explicabo sint animi molestiae cum ducimus perferendis aliquam aut fuga, repellendus quam commodi pariatur laboriosam fugiat qui inventore necessitatibus."}/>

            <div className="separator"/>

            <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/diego3g.png" alt="Diego" />
              <textarea 
              id="tweet" 
              placeholder='Tweet your answer'
              value={newAnswer}
              onKeyDown={handleHotkeySubmit}
              onChange={(event) => {
                setNewAnswer(event.target.value)
              }}/>
            </label>
            <button type='submit'>
              <PaperPlaneRight/>
              <span>Answer</span>
            </button>
          </form>
          
          {answers.map(answer => {
            return <Tweet key={answer} content={answer}/>
          })}
        </main>
    )
}