import React from 'react'
import CardList from '../components/CardList';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>E wallet</h1>
        <CardList />
        <Link to='/addCard'>
        <button className='addCardBtn'>Add a new card</button>
        </Link>
    </div>
  )
}

export default Home;
