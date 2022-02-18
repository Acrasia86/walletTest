import React from 'react'


 const Card = ({card}) => {
     console.log('card', card)
  return (
      
    <div>


<div class="card">
  <div class="card__front card__part">
   
    <p style={{color: 'white'}} class="card__front-logo card__logo"> Visa</p>
    <br />
    <img src="https://w7.pngwing.com/pngs/460/694/png-transparent-iphone-computer-icons-integrated-circuits-chips-subscriber-identity-module-sim-cards-electronics-text-rectangle.png" class="card__front-square card__square" /> 
    <p class="card_numer">{card.cardNumber}</p>
    <div class="card__space-75">
      <span class="card__label">Card holder</span>
      <p class="card__info">{card.cardHolder}</p>
    </div>
    <div class="card__space-25">
      <span class="card__label">Expires</span>
            <p class="card__info">{card.expireMonth}/{card.expireYear}</p>
    </div>
  </div>
  
  <div class="card__back card__part">
    <div class="card__black-line"></div>
    <div class="card__back-content">
      <div class="card__secret">
        <p class="card__secret--last">{card.ccv}</p>
      </div>
      
    </div>
  </div>
  </div>

    </div>
  )
}

export default Card;
