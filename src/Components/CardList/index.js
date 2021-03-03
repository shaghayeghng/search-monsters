import React from 'react';
import Card from '../Card';
import './style.css';

const CardList = ({robots}) => {
    return (
        <div className="card-list">
            {robots.map((robot)=>{
                return ( 
                    <Card 
                        name={robot.name} 
                        username={robot.username} 
                        email={robot.email} 
                        id={robot.id} 
                    />
                );
            })}
        </div>
    )
}

export default CardList;