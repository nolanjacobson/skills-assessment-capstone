import React, { useState } from 'react'
import Ratings from 'react-rating'
import html2canvas from 'html2canvas'

const AddRatings = props => {
  const [frequencyRating, setFrequencyRating] = useState(1)
  const [proficiencyRating, setProficiencyRating] = useState(1)
  const [num, setNum] = useState()

  return (
          <li className="newTestDataLi">
            {props.name.includes('*') ? (
             <><h1 className="newCategory">{props.name}</h1> <section className="flexThem"><div className="headerProficiency">Proficiency Rating Frequency Rating</div></section><hr></hr></>
            ) : (<><span className="testDataText">{props.name}</span>  <section className="frequencyProficiency">
            <Ratings
               start={0}
               stop={4}
               initialRating={proficiencyRating}
               emptySymbol="far fa-plus-square"
               fullSymbol="fas fa-plus-square"
               // placeholderSymbol="fas fa-heartbeat"
               onClick={(rating) => setProficiencyRating(rating)}
             />
           &emsp;
          
             <Ratings
               start={0}
               stop={4}
               initialRating={frequencyRating}
               emptySymbol="far fa-plus-square"
               fullSymbol="fas fa-plus-square"
               // placeholderSymbol="fas fa-heartbeat"
               onClick={newRating => setFrequencyRating(newRating)}
             />
           </section>
         <hr></hr></>
            )}
            {'  '}
          </li>
        )
}

export default AddRatings
