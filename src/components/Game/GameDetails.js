//show list of all games running: link to gameId
import React from 'react'
import '../style.css'



export default function GameDetails(props) {
  if(!props.game) {
    return 'loading...'
    }

    
const { game, setStand, setHit, startGame} = props
console.log('GAMES', game)

//const cardDetails = cards.map(card => <div key={card.id} className="cardSpace"> <img className="imgSize" src={`../img/${card.value}.png`}/> {card.value}</div>)
const userDetails = game.map(user => 
<div className="userSpace">
  <div className="nameSpace">
    {user.name}
  </div>
  <div className="cardSpace"  >
    
   <img className="imgSize" src={`../img/jack-2.png`}/> 
    {/* {cardDetails} */}
  </div>
  <div >
      <button onClick={setStand}>STAND</button>
  </div>
  <div >
      <button onClick={setHit}>HIT</button>
  </div>
  <div className="score">
    <div>
       total:
    </div>
    <div>
       score:
    </div>
  </div>
</div>)
     
//const listOfUser = game.map(game => <div key={game.id}><p >{game.name}</p> <p>{game.points}</p></div> )
  return (
  <div>
    
     BLACK JACK
    <div>
      <button onClick={startGame}>START</button>
    </div>
    {userDetails}
    {/*<div className="userSpace">
      <div className="nameSpace">
      {listOfUser}
      </div>
      <div className="cardSpace">
      cardOne
      </div>
      <div >
        <button onClick={setStand}>STAND</button>
      </div>
      <div >
        <button onClick={setBusted}>BUSTED</button>
      </div>
      <div className="score">
        <div>
          total:
        </div>
        <div>
          score:
        </div>
      </div>
      
    </div> */}

  </div>
    
  )
}


