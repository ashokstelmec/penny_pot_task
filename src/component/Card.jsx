import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="card-item">
        <h2>{props.head}</h2>
        <p>{props.title}</p>
        <img src={props.img} alt=""/>
        <p>{props.para}</p>
        <button className="btn">read now</button>
        </div>
    </div>
  )
}

export default Card