import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"
import './Timeline.css'


  //diferença entre forEach e map é que o map tem return
  
  /*dentro de cada map em react o primeiro parametro que eu tenho que passar é a key, 
  um valor exclusivo que existe em cada parametro
  */

export function Timeline(){
    const [newTweet, setNewTweet] = useState('')
    const [tweets, setTweets] = useState([
        'Primeiro Tweet',
        "Estou aprendendo!",
        "Terceiro Tweet"
    ])
    function createNewTweet(event: FormEvent){
        event.preventDefault()

        setTweets([newTweet, ...tweets ])
        setNewTweet('')
/*Para melhorar a perfomance todos os valores que o React for checar o tempo
inteiro é interessante declarar ele dentro do useState e como o setTweets seta um novo valor
usamos "...tweets" para pegar os Tweets antigos também
*/
    }
    return(
        <main className='timeline'>
          <Header title='Home'/>
          
          <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/diego3g.png" alt="Diego" />
              <textarea id="tweet" 
              placeholder='O que está acontecendo?'
              onChange={(event) => {
                setNewTweet(event.target.value)
              }}></textarea>
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <div className="separator"/>
          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet}/>
          })}
        </main>
    )
}