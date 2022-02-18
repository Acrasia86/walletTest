import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addActiveCard } from '../redux/slice/cardSlice'
import { useHistory, Link } from 'react-router-dom';

 const AddCard = () => {
  const dispatch = useDispatch();
  console.log('active card', addActiveCard.isUsed);
  const handleAddCard = () => {

    let americanExpress = document.querySelector('#americanExpress').value;
    let visa = document.querySelector('#visa').value;
    let mastercard = document.querySelector('#mastercard').value;
    let cardNumber = document.querySelector('#cardNumber').value;
    let cardHolder = document.querySelector('#cardHolder').value;
    let expireMonth = document.querySelector('#expireMonth').value;
    let expireYear = document.querySelector('#expireYear').value;
    let ccv = document.querySelector('#ccv').value;
    let card = {
      americanExpress: americanExpress,
      visa: visa,
      mastercard: mastercard,
        cardNumber: cardNumber,
        cardHolder: cardHolder,
        expireMonth: expireMonth,
        expireYear: expireYear,
        ccv: ccv
    }
    // addActiveCard.isUsed = true;
    // addActiveCard.isActive = false;
    dispatch(addActiveCard(card))

  
    console.log(addActiveCard.isActive);
}
  return (
    <div>
      
  <div className='formContainer'>
  <label className='labels' htmlFor="cardNumber">Vendor</label>
  <select className="form-control form-control-sm" id='americanExpress'>
        <option value="American express" id='americanExpress'>American express</option>
        <option id='visa'>Visa</option>
        <option id='mastercard'>Mastercard</option>
</select>
  <div style={{marginTop: '15px'}} className="form-group">
    <label className='labels' htmlFor="cardNumber">Card number</label>
    <input type="text" className="form-control cardInput" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
  </div>
  <div className="form-group">
    <label className='labels' htmlFor="cardholderName">Cardholder name</label>
    <input type="text" className="form-control cardInput" id="cardHolder" placeholder="Firstname Lastname" />
  </div>
  <div className='validContainer'>
  <div className="form-group">
    <label className='labels' htmlFor="validThruMonth">Month</label>
    <input type="number" className="form-control cardInput" id="expireMonth" placeholder="Month" />
  </div>
  <div className="form-group">
    <label className='labels' htmlFor="validThruYear">Year</label>
    <input type="number" className="form-control cardInput" id="expireYear" placeholder="Year" />
  </div>
  <div className="form-group">
    <label className='labels' htmlFor="ccv">Ccv</label>
    <input type="number" className="form-control cardInput" id="ccv" placeholder="ccv" />
  </div>
  </div>
  <Link to='/'>
  <button onClick={handleAddCard} className="btn btn-primary">Add card</button>
  </Link>
  </div>
    </div>
  )
}

export default AddCard;
