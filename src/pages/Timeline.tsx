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
        'Bem vindo a cópia barata do Design do Tweet', //Aqui cada constante do vetor vira um tweet
        "No momento pouca coisa aqui tem funcionalidade, você pode digitar um Tweet e postar e ele já aparecerá aqui na timeline, você também pode clicar em um tweet e ver os comentários",
        
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
              <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258193-stock-illustration-anonymous-business-man-icon.jpg" alt="Anonimo" />
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