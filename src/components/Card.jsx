import React from 'react'


 const Card = ({card}) => {
     console.log('card', card)
  return (
      
    <div>
     
        <div className='card' style={card.americanExpress === 'American express' || card.vendor === 'American express' ? {backgroundColor: 'orange'} : null}>
            <div className='cardVendorContainer'>
            <div><i className="fa-brands fa-cc-amex fa-2x cardVendorIcon"></i></div>
            </div>
            { card.americanExpress === 'American express' || card.vendor === 'American express' ? 
            <div className='iconsContainer'>
            <div><i className="fa-solid fa-wifi icon"></i></div>
            <div><i className="fa-solid fa-bitcoin-sign icon"></i></div>
            </div> : <div></div>
            }
            <div className='chip'>
            </div>
            <div className='cardNumber'>{card.cardNumber}</div>
            <div className='cardText-container'>
            <small className='cardText'>Card holder name</small>
            <small className='cardText'>Valid thru</small>
            </div>
            <div className='nameContainer'>
                <div className='name'>{card.cardHolder}</div>
                <div className='name'>{card.expireMonth}/{card.expireYear}</div>
            </div>
        </div> 
 
    </div>
  )
}

export default Card;
