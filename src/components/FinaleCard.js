import React, {useState} from 'react'


export const FinaleCard = ({name, text, code, ph}) => {

    const [guess, setGuess] = useState('');


    return (
        <div className="card-container">
            <blockquote>
            <h3>{name}</h3>
            <p>We need your help planning for our Top Secret Christmas party, by understanding our drinking needs:</p>
            <ol>
                <li> All spies - except recruits - have at least some common sense</li>
               
            </ol>
            <p>Do commanders drink only red wine?</p>
             
            
            <label>Yes</label>
            <input type="radio" name="guess" placeholder={ph} onChange={e => setGuess(e.target.value)} value="Yes"></input>
            <label>No</label>
            <input type="radio" name="guess" placeholder={ph} onChange={e => setGuess(e.target.value)} value="No"></input>
            <label>Undetermined</label>
            <input type="radio" name="guess" placeholder={ph} onChange={e => setGuess(e.target.value)} value="Undeterminable"></input>

            {guess === "No" && <div><h5 className="success-text">Decoding Message... </h5><h5 className="failure-text">Error, Partial Success. Manual Decryption Required:</h5><p><strong>{code}</strong></p></div>}
            </blockquote>
        </div>
    )
}
