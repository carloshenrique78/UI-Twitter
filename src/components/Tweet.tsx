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
            <img src="" alt="Diego" />
            <div className="tweet-content">
                <strong>Diego</strong>
                <span className='hashtag'>@diegosf</span>
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