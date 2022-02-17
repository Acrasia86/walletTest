import React from 'react'

 const NotActiveCard = ({card}) => {
  return (
    card.isUsed === false ? <div></div> : 
    <div>
    
    <div class="card">
  <div class="card__front card__part">
    <p className="card__front-square card__square">Visa</p> 
    <img class="card__front-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png" />
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
      <img class="card__back-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png" />
      <img class="card__back-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png" />
      
    </div>
  </div>
  </div>

</div>
  )
}

export default NotActiveCard;
