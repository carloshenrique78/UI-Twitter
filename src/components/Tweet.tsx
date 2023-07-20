import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'
import {Link} from 'react-router-dom'
// funciona como uma ancora "<a> só que não recarrega a pagina inteira"
interface TweetProps{
    content: string
}

export function Tweet(props: TweetProps){
    return(
        <Link to='/status' className='tweet'>
            <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258193-stock-illustration-anonymous-business-man-icon.jpg" alt="Anonimo" />
            <div className="tweet-content">
                <strong>Anonimo</strong>
                <span className='hashtag'>@UsuarioAnonimo</span>
            </div>
            <p>
                {props.content}
            </p>
            
            <div className='tweet-content-footer'>
                <button type='button'>
                    <ChatCircle/>
                    20
                </button>
                <button type='button'>
                    <ArrowsClockwise/>
                    20
                </button>
                <button type='button'>
                    <Heart/>
                    20
                </button>
            </div>
        </Link>
    )
}