import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import NotActiveCard from './NotActiveCard';

 const CardList = () => {

  const { cards } = useSelector((state) => state.cards);
  const { notActiveCards } = useSelector((state) => state.cards);
 
  return (
      
    <div>
        <div>
        <p className='activeCard'>Active card</p>

            {cards.map((card) => (
               <Card card={card}/>
            ))}
        </div>
        <div>
        <p className='activeCard'>Not active cards</p>
        {notActiveCards.map((notActiveCard) => (
      
          <NotActiveCard card={notActiveCard}/>
        ))}
        </div>
    </div>
  )
}

export default CardList;
