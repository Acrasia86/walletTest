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
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let expireMonth = document.querySelector('#expireMonth').value;
    let expireYear = document.querySelector('#expireYear').value;
    let ccv = document.querySelector('#ccv').value;
    let card = {
      americanExpress: americanExpress,
      visa: visa,
      mastercard: mastercard,
        cardNumber: cardNumber,
        firstName: firstName,
        lastName: lastName,
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
      <h1 style={{color: 'white', paddingBottom: '30px'}}>Add card</h1>
  <div className='formContainer'>
  <label className='labels' htmlFor="cardNumber">Vendor</label>
  <select className="form-control form-control-sm " id='americanExpress'>
        <option value="American express" id='americanExpress'>American express</option>
        <option id='visa'>Visa</option>
        <option id='mastercard'>Mastercard</option>
</select>
  <div style={{marginTop: '15px'}} className="form-group">
    <label className='labels' htmlFor="cardNumber">Card number</label>
    <input type="text" className="form-control cardInput" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
  </div>
  <div style={{display: 'flex', flexDirection: 'row'}}>
  <div className="form-group">
    <label className='labels' htmlFor="firstName">First name</label>
    <input type="text" className="form-control cardInput" id="firstName" placeholder="Firstname" />
  </div>
  <div className="form-group">
    <label className='labels' htmlFor="lastName">Last name</label>
    <input type="text" className="form-control cardInput" id="lastName" placeholder="Lastname" />
  </div>
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
    <label className='labels' htmlFor="ccv">ccv</label>
    <input type="number" className="form-control cardInput" id="ccv" placeholder="ccv" />
  </div>
  </div>
  <Link to='/'>
  <button style={{border: '1px solid #efff00', marginRight: '50px'}} onClick={handleAddCard} className="addCardBtn">Add card</button>
  </Link>
  <Link to='/'>
  <button style={{border: '1px solid #fff1af'}} className="addCardBtn">Go back</button>
  </Link>
  </div>
    </div>
  )
}

export default AddCard;
