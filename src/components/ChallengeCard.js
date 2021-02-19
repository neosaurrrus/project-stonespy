import React, {useState} from 'react'


export const ChallengeCard = ({name, text, answer, code }) => {
    const {guess, setGuess} = useState('')

    return (
        <div className="card-container">
            <blockquote>
            <h3>{name}</h3>
            <p>
               {text}
            </p>
            <label htmlFor="answer">Enter Answer to decrypt key:</label>
            <input type="text" name="answer" value={guess} onChange={e => setGuess(e.target.value)} placeholder="e.g 5"></input>
            <p>{code}</p>
            </blockquote>
        </div>
    )
}
