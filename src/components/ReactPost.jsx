import React from 'react'
import { useState } from 'react'
import PostLiked from './PostLiked';
const buttons = ["btn1", "btn2", "btn3"];

function ReactPost({ questions }) {
    const [liked, setLiked] = useState({});

    const likePost = (btnId) => {
        setLiked(state => ({ ...state, [btnId]: !state[btnId] }))
    }

    return (
        <div className='ReactPost'>
            {questions.map(({ question, answer }, i) => (
                <div className='posts' key={i}>
                    <h3>{question}</h3>
                    <p>{answer}</p>
                    {!liked[buttons[i]] && <button onClick={() => likePost(buttons[i])} className={buttons[i]}>Like <i className="fa fa-thumbs-up"></i></button>}
                    {liked[buttons[i]] && <PostLiked />}
                </div>
            ))}
        </div>
    )
}

export default ReactPost
