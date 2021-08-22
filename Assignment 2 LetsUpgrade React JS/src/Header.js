import React from 'react'
import Card from './Card';

function Header() {

   const Cards = [
       
   ]


    return (
        <div className="container">
        {
            Cards.map((card,index) => (
                <Card title={card.title} desc={card.desc} subtitle={card.subtitle} image={card.image} />
            ))
        }
        </div>
    )
}

export default Header;
