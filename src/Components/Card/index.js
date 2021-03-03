import React from 'react';
import './style.css';

const Card = ({name, email, id}) => {
    return (
        <div className="card-container">
            <img alt="monster" src={ `https://robohash.org/${id}?size=200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;