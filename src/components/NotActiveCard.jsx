import React from 'react'

 const NotActiveCard = ({card}) => {
  return (
    card.isUsed === false ? <div></div> : 
    <div>


    <div class="card">
      <div class="card__front card__part">
        <p class="card__front-square card__square"> </p>
        <p style={{color: 'white'}} class="card__front-logo card__logo"> Visa</p>
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

export default NotActiveCard;
