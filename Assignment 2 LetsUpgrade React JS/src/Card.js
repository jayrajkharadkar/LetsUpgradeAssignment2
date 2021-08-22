import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
              <img src= {props.image} className="card-image"/>
            </div>
            <h1 className="card-title">
              {props.title}
            </h1>
            <h3 className="card-subtitle">
               {props.subtitle}
            </h3>
            <p className="card-desc">
              {props.desc}
            </p>
            <p className="btn-parent">
            <button className="card-btn">Read more</button>
            </p>
        </div>
    )
}

export default Card;