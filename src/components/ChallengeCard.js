import React, {useState} from 'react'


export const ChallengeCard = ({name, text, answer, code,ph}) => {

    const [guess, setGuess] = useState('');


    return (
        <div className="card-container">
            <blockquote>
            <h3>{name}</h3>
            <p>
               {text}
            </p>
            <label htmlFor="answer">Enter correct answer to decrypt:</label>
            <input type="text" name="guess" placeholder={ph} onChange={e => setGuess(e.target.value)} value={guess}></input>
            {guess.toLowerCase() === answer ? <div><h5 className="success-text">Decoding Message... </h5><h5 className="failure-text">Error, Partial Success. Further Manual Decryption Required:</h5><p><strong>{code}</strong></p></div> : <div><h5>Data Locked</h5></div>}
            </blockquote>
        </div>
    )
}
