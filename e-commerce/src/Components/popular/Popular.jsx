import React from 'react'
import './Popular.css'



const Popular = () => {
  return (
    <div className='Popular'>
        <h1>Popular</h1>
        <hr/>
        <div className="popular-item">
            {data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}
        </div>
    </div>
  )
}
export default Popular
