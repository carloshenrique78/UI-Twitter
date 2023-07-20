/*Comentários Tweet*/

import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"



export function Status(){
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([ //Respostas do Tweet
'Caso você abra a aba Inspecionar e clicar em Network perceberá que o navegador não recarregou praticamente nada ao sair da home e vir para os comentários do tweet, isso acontece pois com o React você pode fazer loading com componentes e alterar somente oque necessita ser trocado isso deixar sua página web bem mais rápida',
'Em uma página HTML comum sua página recarregaria para cada nova rota que você clicasse, mesmo que sua barra lateral ou header fossem iguais, isso acaba causando lentidão em grandes projetos, isso é muito para o usuário',
'Além de ReactJS eu utilizei libs nesse projeto, o phosphor para carregar ícones SVG e não interferir na perfomance do site, e o React Router para manipular rotas sem precisar recarregar o site inteiro para ter acesso ao código desse projeto você pode acessar meu GitHub "carloshenrique78" e até mais!'
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
          
            <Tweet content={"Bom, como você pode ver esse Tweet não tem o conteúdo que você clicou e também não tem 20 comentários, isso acontece pois esse exemplo em react não tem banco de dados e é meu primeiro projeto para desenvolver habilidades com essa tecnologia"}/>

            <div className="separator"/>

            <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258193-stock-illustration-anonymous-business-man-icon.jpg" alt="Anonimo" />
              <textarea 
              id="tweet" 
              placeholder='Tweet sua resposta'
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